import CategoryRepositoriy from '../../Repositories/CategoryRepository';
import ListCategoryController from './ListCategoryController';
import ListCategoryService from './ListCategoryService';

const repository = CategoryRepositoriy.getInstace();
const listCategory = new ListCategoryService(repository);
const listController = new ListCategoryController(listCategory);

export { listController };
