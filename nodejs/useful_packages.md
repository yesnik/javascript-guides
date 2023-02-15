# Useful packages

### axios

[axios](https://github.com/axios/axios) - promise based HTTP client for the browser and node.js. We can substitute the native [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) with this library.

### Babel

[Babel](https://babeljs.io/setup#installation) allows us to use latest JS features.

Create `.babelrc` configuration file and enable some plugins. To start, you can use the env preset, which enables transforms for ES2015+:

```json
{
  "presets": ["@babel/preset-env"]
}
```

### Body-parser

[body-parser](https://github.com/expressjs/body-parser) is a node.js parser of request's body that writes it to `req.body` object.

### Cors

[Cors](https://github.com/expressjs/cors) module allows to enable CORS headers for Express apps.

### Date and Time

- [date-fns](https://github.com/date-fns/date-fns) - work with dates

### Dotenv

[Dotenv](https://github.com/motdotla/dotenv) loads environment variables from a `.env` file into `process.env`

### Express

[Express](https://github.com/expressjs/express) is a web framework for node.

### http-server

[http-server](https://github.com/http-party/http-server) is a simple, zero-configuration command-line HTTP server.

### json-server

[json-server](https://www.npmjs.com/package/json-server) is a full fake REST API with zero coding. Place your JSON data in `db.json`.

### Mongoose

[mongoose](https://github.com/Automattic/mongoose/) is ORM for MongoDb 

### Nodemon

[Nodemon](https://github.com/remy/nodemon) restarts node app on code change.

### Webpack, Webpack-cli, Webpack-dev-server

- [webpack](https://github.com/webpack/webpack) is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, 
  yet it is also capable of transforming, bundling, or packaging just about any resource or asset. 
- [webpack-cli](https://github.com/webpack/webpack-cli) provides a flexible set of commands for developers 
to increase speed when setting up a custom webpack project.
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server) is a development server at http://127.0.0.1:8080/ that provides live reloading.
- [babel-loader](https://webpack.js.org/loaders/babel-loader/) - transpilile JavaScript files using Babel and webpack.

### Webpack plugins

- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) - removes build folder(s) before building.
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) - simplifies creation of HTML files to serve your webpack bundles.
- [webpack-merge](https://github.com/survivejs/webpack-merge) helps to merge webpack's config files.
- [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack) - sets environment variables
