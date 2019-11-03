const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(morgan('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
