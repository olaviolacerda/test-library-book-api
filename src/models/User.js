/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { appSecretKey } = require('../env');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
  }, {
    hooks: {
      beforeSave: async (user) => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8);
        }
      },
    },
  });

  User.prototype.checkPassword = function (password) { return bcrypt.compare(password, this.password_hash); };

  User.prototype.generateToken = function () {
    return jwt.sign({ id: this.id, admin: this.admin }, appSecretKey, {
      expiresIn: '1 days',
    });
  };

  User.associates = (models) => {
    User.hasMany(models.Book, {
      foreignKey: 'favorite_book_id',
      as: 'favorite_books',
      through: 'favorite_books',
    });
  };

  return User;
};
