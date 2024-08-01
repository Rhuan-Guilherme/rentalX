import CategoryRepositoriy from '../../Repositories/CategoryRepository';
import CreateCategoryController from './CreateCategoryController';
import CreateCategoryService from './CreateCategoryService';

const RepositoryCategory = CategoryRepositoriy.getInstace();
const categoryService = new CreateCategoryService(RepositoryCategory);
const categoryController = new CreateCategoryController(categoryService);

export { categoryController };
