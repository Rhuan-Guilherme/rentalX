import { ISpecificationRepository } from '../Repositories/ISpecificationRepository';

interface IRequestDTO {
  name: string;
  description: string;
}

class CreateSpecification {
  private respository: ISpecificationRepository;

  constructor(repository: ISpecificationRepository) {
    this.respository = repository;
  }

  execute({ name, description }: IRequestDTO) {
    const specificationAlredyExist = this.respository.findByName(name);
    if (specificationAlredyExist) {
      throw new Error('Alredy exist this specification');
    }
    this.respository.create({ name, description });
  }
}

export { CreateSpecification, IRequestDTO };
