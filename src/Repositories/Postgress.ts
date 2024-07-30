import Category from '../Models/Category';
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoryRepository';

class Postgress implements ICategoryRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }

  list(): Array<Category> {
    console.log('ceertpo');
    return null;
  }
}

export default Postgress;
