const { expect } = require('chai');
const { match, stub, resetHistory } = require('sinon');
const { makeMockModels } = require('sequelize-test-helpers');
const proxyquire = require('proxyquire');

describe('Book Service Test', () => {
  const Book = {
    create: stub(), findAll: stub(), findOne: stub(), findByPk: stub(),
  };
  const mockModels = makeMockModels({ Book });

  const bookService = proxyquire('../../../src/services/BookService', {
    '../models': mockModels,
  });

  const id = 1;
  const data = {
    id: 1,
    title: 'The Lord Of The Rings',
    isbn: '321321321321',
    year: 1954,
  };

  const fakeCategory = {
    id: 6,
    title: 'Fantasy',
  };

  const fakeBook = { id, ...data };

  const fakeBookWithCategory = { ...fakeBook, category: fakeCategory };

  after(resetHistory);
  it('should create a book', async () => {
    Book.create.resolves(fakeBook);

    const book = await bookService.create({ id, ...data });

    expect(Book.create).to.have.been.calledWith(match(data));
    expect(book).to.have.property('title');
    expect(book).to.have.property('title');
    expect(book).to.have.property('id');
  });

  it('should find a book by id', async () => {
    Book.findByPk.resolves(fakeBookWithCategory);

    const book = await bookService.findById(id);

    expect(Book.findByPk).to.have.been.calledWith(match(id));
    expect(book).to.have.property('title');
    expect(book).to.have.property('id');
    expect(book).to.have.property('category');
  });

  it('should list all books', async () => {
    Book.findAll.resolves([fakeBook]);

    const books = await bookService.list();

    expect(Book.findAll).to.have.been.calledWith(match({
      attributes: ['id', 'title', 'isbn', 'year'],
      include: { as: 'category', attributes: ['title', 'id'], model: 'Category' },
    }));
    expect(books.length).to.be.equal(1);
    expect(books).to.includes(fakeBook);
  });
});
