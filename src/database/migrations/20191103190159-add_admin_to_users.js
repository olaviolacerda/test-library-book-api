
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('users', 'admin', {
    allowNull: false,
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }),

  down: (queryInterface) => queryInterface.removeColumn('users', 'admin'),
};
