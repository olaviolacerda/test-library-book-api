/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    isbn: DataTypes.STRING,
    year: DataTypes.INTEGER,
  });

  Book.associate = (models) => {
    Book.belongsToMany(models.User, {
      foreignKey: 'favorite_book_id',
      through: 'favorite_books',
    });
  };

  return Book;
};
