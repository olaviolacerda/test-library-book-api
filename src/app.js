const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.logger();
    this.routes();
  }

  logger() {
    this.express.use(morgan('combined'));
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
