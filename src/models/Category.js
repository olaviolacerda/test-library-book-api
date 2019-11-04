/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING,
  });

  Category.associate = (models) => {
    Category.hasMany(models.Book, { foreignKey: 'category_id' });
  };

  return Category;
};
