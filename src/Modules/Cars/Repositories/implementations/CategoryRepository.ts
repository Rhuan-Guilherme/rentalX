import Category from '../../Models/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../ICategoryRepository';

class CategoryRepositoriy implements ICategoryRepository {
  private categories: Array<Category>;
  // eslint-disable-next-line no-use-before-define
  private static INSTACE: CategoryRepositoriy;

  private constructor() {
    this.categories = [];
  }

  public static getInstace(): CategoryRepositoriy {
    if (!CategoryRepositoriy.INSTACE) {
      CategoryRepositoriy.INSTACE = new CategoryRepositoriy();
    }
    return CategoryRepositoriy.INSTACE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }

  list(): Array<Category> {
    return this.categories;
  }

  findByName(name: string): Category {
    const nameCategory = this.categories.find(
      (category) => category.name === name,
    );
    return nameCategory;
  }
}

export default CategoryRepositoriy;
