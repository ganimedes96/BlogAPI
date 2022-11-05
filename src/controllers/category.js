const CategoryService = require('../services/category');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const result = await CategoryService.createCategory(name);
    return res.status(201).json(result);
};

const getCategories = async (_req, res) => {
    const categories = await CategoryService.getCategory();
    return res.status(200).json(categories);
};

module.exports = { createCategory, getCategories };