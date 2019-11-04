
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('users',
    [
      {
        name: 'Admin',
        email: 'admin@email.com',
        password_hash: bcrypt.hashSync('admin123', 8),
        phone: '5199999999',
        age: 20,
        admin: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'User1',
        email: 'user1@email.com',
        password_hash: bcrypt.hashSync('user1234', 8),
        phone: '517777777',
        age: 30,
        admin: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'User2',
        email: 'user2@email.com',
        password_hash: bcrypt.hashSync('user1234', 8),
        phone: '518888888',
        age: 25,
        admin: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], { individualHooks: true }),

  down: (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
