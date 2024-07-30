"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
// eslint-disable-next-line import-helpers/order-imports
const express_1 = require("express");
const CategoryRepository_1 = __importDefault(require("../Repositories/CategoryRepository"));
const categoriesRouter = (0, express_1.Router)();
exports.categoriesRouter = categoriesRouter;
const categories = new CategoryRepository_1.default();
categoriesRouter.post('/', (req, res) => {
    const { name, description } = req.body;
    const categoryAlreadyExist = categories.findByName(name);
    if (categoryAlreadyExist) {
        return res.status(400).json({
            error: `a categoria ${categoryAlreadyExist.name} já esta cadastrada!`,
        });
    }
    categories.crete({ name, description });
    return res.status(201).json({
        message: 'Dados cadastrados com sucesso',
        data: categories,
    });
});
categoriesRouter.get('/', (req, res) => {
    const list = categories.list();
    res.status(200).json(list);
});
