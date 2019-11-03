const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  httpPort: (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000,
  dbPort: parseInt(process.env.DB_PORT || '', 10),
  dbHost: process.env.DB_HOST || '',
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_DATABASE,
  dbDialect: process.env.DB_DIALECT || 'postgres',
  appSecretKey: process.env.APP_SECRET_KEY,
};
