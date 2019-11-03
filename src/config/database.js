const env = require('../env');

module.exports = {
  host: env.dbHost,
  port: env.dbPort,
  username: env.dbUsername,
  password: env.dbPassword,
  database: env.dbDatabase,
  dialect: env.dbDialect,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
