# guitu500



**Note** This app has been tested on node 4

```
git clone https://github.com/react-li/guitu500.git
cd guitu500
npm install
```

**Start the app**

```bash
npm run dev
```

and open [localhost:3000](http://localhost:3000).

You can also try the built app:

```bash
npm run build   # First, build for production
npm run prod    # then, run the production version
```

then open [localhost:8080](http://localhost:8080).



## Table of Contents

* [Application structure](#application-structure)
  * [The fluxible app](#the-fluxible-app)
  * [Async data](#async-data)
  * [Router](#router)
  * [Stores](#stores)
    * [Resource stores](#resource-stores)
    * [List stores](#list-stores)
    * [The HtmlHeadStore](#the-htmlheadstore)
* [Internationalization (i18n)](#internationalization-i18n)
  * [How the user’s locale is detected](#how-the-user’s-locale-is-detected)
  * [Setting up react-intl](#setting-up-react-intl)
  * [Internationalization, the flux way](#internationalization-the-flux-way)
  * [Sending the locale to the API](#sending-the-locale-to-the-api)
* [Development](#development)
  * [nodemon](#nodemon)
  * [Webpack](#webpack)
  * [Babeljs](#babeljs)
  * [.editorconfig](#editorconfig)
  * [Linting](#linting)
  * [Debugging](#debugging)

## Application structure

```bash
.
├── index.js            # Starts the express server and the webpack dev server
├── config              # Contains the configuration for dev and prod environments
├── nodemon.json        # Configure nodemon to watch some files
├── src
│   ├── app.js          # The fluxible app
│   ├── client.js       # Entry point for the client
│   ├── config.js       # Config loader (load the config files from /config)
│   ├── routes.js       # Routes used by fluxible-router
│   ├── server.js       # Start the express server and render the routes server-side
│   │
│   ├── actions         # Fluxible actions
│   ├── components      # React components
│   ├── constants       # Constants
│   ├── containers      # Contains React containers components
│   │   ├── ...
│   │   ├── Html.js     # Used to render the <html> document server-side
│   │   └── Root.js     # Root component

│   ├── intl            # Contains the messages for i18n
│   ├── server          # Server-side only code
│   │   ├── ga.js              # Google Analytics script
│   │   ├── intl-polyfill.js   # Patch node to support `Intl` and locale-data
│   │   ├── render.js          # Middleware to render server-side the fluxible app
│   │   └── setLocale.js       # Middleware to detect and set the request's locale
│   ├── services        # Fetchr services
│   ├── stores          # Fluxible stores
│   ├── style           # Contains the Sass files
│   └── utils         
│       ├── APIUtils.js            # Wrapper to superagent for communicating with 500px API
│       ├── CookieUtils.js         # Utility to write/read cookies 
│       ├── IntlComponents.js      # Exports wrapped react-intl components
│       ├── IntlUtils.js           # Utilities to load `Intl` and locale-data
│       ├── connectToIntlStore.js  # Connects react-intl components with the IntlStore
│       ├── getIntlMessage.js      # Get react-intl messages
│       └── trackPageView.js       # Track a page view with google analitics
├── static              
│   ├── assets         # Static files
│   └── dist           # Output files for webpack on production
└── webpack
    ├── dev.config.js  # Webpack config for development
    ├── prod.config.js # Webpack config for building the production files
    └── server.js      # Used to starts the webpack dev server

```

## Development

Run the development version with

```
npm run dev
```

### nodemon

This task runs the server with [nodemon](https://github.com/remy/nodemon). Nodemon will restart the server when some of the files specified in [its config](nodemon.json) change.

### Webpack

Webpack is used as commonjs module bundler, css builder (using sass-loader) and assets loader (images and svg files).

The [development config](./webpack/dev.config.js) enables source maps, the [Hot Module Replacement](http://webpack.github.io/docs/hot-module-replacement.html) and [react-hot-loader](http://gaearon.github.io/react-hot-loader/). It loads CSS styles with `<style>`, to enable styles live reload). This config is used by the [webpack-dev-server](webpack/server.js), serving the files bundled by Webpack.

> This config uses the [webpack-error-notification](https://github.com/vsolovyov/webpack-error-notification)
> plugin. To get notified on errors while compiling the code, on Mac you must `brew install terminal-notifier`.

The [production config](./webpack/prod.config.js) builds the client-side production bundle from `npm run build`.

Both configs set a `process.env.BROWSER` global variable, useful to require CSS from the components, e.g:

```js
// MyComponent
if (process.env.BROWSER) {
  require('../style/MyComponent.scss');
}
```

