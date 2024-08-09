import CategoryRepositoriy from '../../Repositories/implementations/CategoryRepository';
import importCategoryController from './importCategoryController';
import importCategoryService from './importCategoryService';

const repository = CategoryRepositoriy.getInstace();
// eslint-disable-next-line new-cap
const importService = new importCategoryService(repository);
// eslint-disable-next-line new-cap
const importController = new importCategoryController(importService);

export { importController };
