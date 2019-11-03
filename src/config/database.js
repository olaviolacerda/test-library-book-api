const env = require('../env');

module.exports = {
  host: env.dbHost,
  username: env.dbUsername,
  password: env.dbPassword,
  database: env.dbDatabase,
  dialect: env.dbDialect,
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
