/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    isbn: DataTypes.STRING,
    year: DataTypes.INTEGER,
  });

  Book.associate = (models) => {
    Book.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' });
    Book.belongsToMany(models.User, { through: 'Favourites', foreignKey: 'book_id', as: 'users' });
  };

  return Book;
};
