import Category from '../Models/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByName(name: string): Category;
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Array<Category>;
}

export { ICategoryRepository, ICreateCategoryDTO };
