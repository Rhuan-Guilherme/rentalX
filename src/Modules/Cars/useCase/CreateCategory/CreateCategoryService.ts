import { ICategoryRepository } from '../../Repositories/ICategoryRepository';

interface IRequestDTO {
  name: string;
  description: string;
}

class CreateCategoryService {
  private categoryRepository: ICategoryRepository;

  constructor(repository: ICategoryRepository) {
    this.categoryRepository = repository;
  }

  excute({ name, description }: IRequestDTO) {
    const categoryAlreadyExist = this.categoryRepository.findByName(name);
    if (categoryAlreadyExist) {
      throw new Error(
        `A categoria ${categoryAlreadyExist.name} já está cadastrada!`,
      );
    }

    this.categoryRepository.create({ name, description });
  }
}

export default CreateCategoryService;
