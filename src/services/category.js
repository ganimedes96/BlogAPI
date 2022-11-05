const { Category } = require('../models');

const createCategory = async (name) => {
    const categoryId = await Category.create({ name });
    return categoryId;
};

const getCategory = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = { createCategory, getCategory };