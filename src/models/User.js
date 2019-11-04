/* eslint-disable func-names */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { secretKey } = require('../env');

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
          // eslint-disable-next-line no-param-reassign
          user.password_hash = await bcrypt.hash(user.password, 8);
        }
      },
    },
  });

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash);
  };

  User.prototype.generateToken = function () {
    return jwt.sign({ id: this.id, admin: this.admin }, secretKey, {
      expiresIn: '1 days',
    });
  };

  User.associates = (models) => {
    User.belongsToMany(models.Book, {
      through: 'favourites',
      foreignKey: 'user_id',
      as: 'books',
    });
  };

  return User;
};
