const chai = require('chai');
chai.use(require('sinon-chai'));

const { expect } = chai;

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const CategoryModel = require('../../../src/models/Category');

describe('Category Model Test', () => {
  const Category = CategoryModel(sequelize, dataTypes);
  const category = new Category();

  checkModelName(Category)('Category');

  context('properties', () => {
    ['title'].forEach(
      checkPropertyExists(category),
    );
  });

  context('associations', () => {
    const Book = 'some book';

    before(() => {
      Category.associate({ Book });
    });

    it('defined a hasMany association with Book', () => {
      expect(Category.hasMany).to.have.been.calledWith(Book);
    });
  });
});
