import importCategoryController from './importCategoryController';
import importCategoryService from './importCategoryService';

// eslint-disable-next-line new-cap
const importService = new importCategoryService();
// eslint-disable-next-line new-cap
const importController = new importCategoryController(importService);

export { importController };
