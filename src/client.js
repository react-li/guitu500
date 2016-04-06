/* eslint no-console: 0 */
import React from "react";
import IntlUtils from "./utils/IntlUtils";

// Add promise support for browser not supporting it
import es6Promise from "es6-promise";
es6Promise.polyfill();

window.debug = require("debug");

const debug = window.debug("guitu500");

const mountNode = document.getElementById("content");
const dehydratedState = window.__INITIAL_STATE__;

function renderApp() {

  const app = require("./app");

  debug("Rehydrating state...", dehydratedState);

  app.rehydrate(dehydratedState, (err, context) => {
    if (err) {
      throw err;
    }

    debug("State has been rehydrated");

    const Root = app.getComponent();

    React.render(<Root context={ context.getComponentContext() } />, mountNode, () => {
      debug("Root component has been mounted");
    });
  });
}

// Load the Intl polyfill and required locale data
const locale = document.documentElement.getAttribute("lang");

IntlUtils.loadIntlPolyfill(locale)
  .then(IntlUtils.loadLocaleData.bind(null, locale))
  .then(renderApp)
  .catch(err => {
    console.error(err);
  });
