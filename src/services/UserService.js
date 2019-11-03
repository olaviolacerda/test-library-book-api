const { User } = require('../models');

class UserService {
  constructor() {
    this.userModel = User;
  }

  async create(data) {
    const user = await this.userModel.create(data);
    return user;
  }

  async findById(id) {
    const user = await this.userModel.getById(id);

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
      user,
      token: user.generateToken(),
    };
  }
}

module.exports = new UserService();
