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

