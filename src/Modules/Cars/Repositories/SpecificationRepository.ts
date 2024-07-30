import Specification from '../Models/Specification';
import {
  ISpecificationRepository,
  ICreateSpecification,
} from './ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private repository: Array<Specification>;

  constructor() {
    this.repository = [];
  }

  create({ name, description }: ICreateSpecification): void {
    const specificationObject = new Specification();
    Object.assign(specificationObject, {
      name,
      description,
      created_at: new Date(),
    });
    this.repository.push(specificationObject);
  }

  findByName(name: string): Specification {
    const find = this.repository.find(
      (specification) => specification.name === name,
    );
    return find;
  }

  list(): Array<Specification> {
    return this.repository;
  }
}

export default SpecificationRepository;
