const { expect } = require('chai');
const { match, stub, resetHistory } = require('sinon');
const { makeMockModels } = require('sequelize-test-helpers');
const proxyquire = require('proxyquire');

describe('Category Service Test', () => {
  const Category = {
    findByPk: stub(),
  };
  const mockModels = makeMockModels({ Category });

  const categoryService = proxyquire('../../../src/services/CategoryService', {
    '../models': mockModels,
  });

  const id = 1;
  const data = {
    title: 'Fantasy',
  };

  const fakeCategory = { id, ...data };

  after(resetHistory);

  it('should find a category by id', async () => {
    Category.findByPk.resolves(fakeCategory);

    const category = await categoryService.findById(id);

    expect(Category.findByPk).to.have.been.calledWith(match(id));
    expect(category).to.have.property('title');
    expect(category).to.have.property('id');
  });
});
