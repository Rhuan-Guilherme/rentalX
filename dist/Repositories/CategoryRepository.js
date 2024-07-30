"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(require("../Models/Category"));
class CategoryRepositoriy {
    constructor() {
        this.categories = [];
    }
    crete({ name, description }) {
        const category = new Category_1.default();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
        this.categories.push(category);
    }
    list() {
        return this.categories;
    }
    findByName(name) {
        const nameCategory = this.categories.find((category) => category.name === name);
        return nameCategory;
    }
}
exports.default = CategoryRepositoriy;
