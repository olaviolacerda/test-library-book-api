/* eslint-disable class-methods-use-this */
const { User } = require('../models');

class UserService {
  constructor() {
    this.userModel = User;
  }

  async create(data) {
    const user = await this.userModel.create(data);

    return user;
  }

  async update(userId, body) {
    const response = await this.userModel.update(body, {
      where: { id: userId },
      returning: true,
    });

    return response;
  }

  async delete(userId) {
    const response = await this.userModel.destroy({
      where: { id: userId },
    });

    return response;
  }

  async list() {
    const users = await this.userModel.findAll({ attributes: ['name', 'age', 'phone', 'email'], include: ['favourite_books'] });
    return users;
  }


  async findById(id, options = {}) {
    const user = await this.userModel.findByPk(Number(id), options);

    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async findByEmail(email) {
    const user = await this.userModel.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found.');
    }
    return user;
  }

  async login({ email, password }) {
    const user = await this.findByEmail(email);

    if (!(await user.checkPassword(password))) {
      return new Error('Incorrect password');
    }

    return {
      'access-token': user.generateToken(),
    };
  }
}

module.exports = new UserService();
