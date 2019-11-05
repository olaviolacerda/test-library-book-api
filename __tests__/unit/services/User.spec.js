const { expect } = require('chai');
const { match, stub, resetHistory } = require('sinon');
const bcrypt = require('bcryptjs');
const { makeMockModels } = require('sequelize-test-helpers');
const proxyquire = require('proxyquire');

describe('User Service Test', () => {
  const User = {
    create: stub(), findAll: stub(), findOne: stub(), findByPk: stub(),
  };
  const mockModels = makeMockModels({ User });

  const userService = proxyquire('../../../src/services/UserService', {
    '../models': mockModels,
  });

  const id = 1;
  const data = {
    name: 'Admin',
    email: 'admin@email.com',
    password_hash: bcrypt.hashSync('admin123', 8),
    phone: '5199999999',
    age: 20,
    admin: true,
  };
  const fakeUser = { id, ...data };


  after(resetHistory);
  it('should create an user', async () => {
    User.create.resolves(fakeUser);

    const user = await userService.create({ id, ...data });

    expect(user).to.have.property('name');
    expect(user).to.have.property('id');
  });

  it('should find user by id', async () => {
    User.findByPk.resolves(fakeUser);

    const user = await userService.findById(id);

    expect(User.findByPk).to.have.been.calledWith(match(id));
    expect(user).to.have.property('name');
    expect(user).to.have.property('id');
  });

  it('should find user by email', async () => {
    User.findOne.resolves(fakeUser);

    const user = await userService.findByEmail(data.email);

    expect(User.findOne).to.have.been.calledWith(match({ where: { email: data.email } }));
    expect(user).to.have.property('email');
    expect(user).to.have.property('id');
  });

  it('should list all users', async () => {
    User.findAll.resolves([fakeUser]);

    const users = await userService.list();

    expect(User.findAll).to.have.been.calledWith(match({ attributes: ['id', 'name', 'age', 'phone', 'email'] }));
    expect(users.length).to.be.equal(1);
    expect(users).to.includes(fakeUser);
  });
});
