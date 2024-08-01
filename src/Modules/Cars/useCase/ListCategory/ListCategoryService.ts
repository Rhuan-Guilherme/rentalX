import Category from '../../Models/Category';
import { ICategoryRepository } from '../../Repositories/ICategoryRepository';

class ListCategoryService {
  private respository: ICategoryRepository;

  constructor(repository: ICategoryRepository) {
    this.respository = repository;
  }

  execute(): Array<Category> {
    return this.respository.list();
  }
}

export default ListCategoryService;
