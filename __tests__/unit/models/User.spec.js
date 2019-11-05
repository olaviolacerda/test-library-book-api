const chai = require('chai');
chai.use(require('sinon-chai'));

const { expect } = chai;

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../../src/models/User');

describe('User Model Test', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  checkModelName(User)('User');

  context('properties', () => {
    ['age', 'name', 'phone', 'email', 'admin', 'password_hash'].forEach(
      checkPropertyExists(user),
    );
  });

  context('associations', () => {
    const Book = 'some book';

    before(() => {
      User.associate({ Book });
    });

    it('defined a belongsToMany association with Book', () => {
      expect(User.belongsToMany).to.have.been.calledWith(Book);
    });
  });
});
