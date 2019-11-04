const { Category } = require('../models');

class CategoryService {
  constructor() {
    this.categoryModel = Category;
  }

  async findById(id) {
    const category = await this.categoryModel.findByPk(Number(id));

    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  }
}

module.exports = new CategoryService();
