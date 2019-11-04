
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'books',
    'category_id',
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      model: 'Category',
      key: 'id',
    },
  ),

  down: (queryInterface) => queryInterface.removeColumn('books', 'category_id'),
};
