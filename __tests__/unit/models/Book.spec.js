const chai = require('chai');
chai.use(require('sinon-chai'));

const { expect } = chai;

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../src/models/Book');

describe('Book Model Test', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  checkModelName(Book)('Book');

  context('properties', () => {
    ['title', 'isbn', 'year'].forEach(
      checkPropertyExists(book),
    );
  });

  context('associations', () => {
    const Category = 'some category';

    before(() => {
      Book.associate({ Category });
    });

    it('defined a belongsTo association with Category', () => {
      expect(Book.belongsTo).to.have.been.calledWith(Category);
    });
  });
});
