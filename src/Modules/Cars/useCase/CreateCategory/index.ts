import CategoryRepositoriy from '../../Repositories/CategoryRepository';
import CreateCategoryController from './CreateCategoryController';
import CreateCategoryService from './CreateCategoryService';

const RepositoryCategory = new CategoryRepositoriy();
const categoryService = new CreateCategoryService(RepositoryCategory);
const categoryController = new CreateCategoryController(categoryService);

export { categoryController };
