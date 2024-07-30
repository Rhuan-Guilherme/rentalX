import Specification from '../Models/Specification';

interface ICreateSpecification {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecification): void;
  findByName(name: string): Specification;
  list(): Array<Specification>;
}

export { ICreateSpecification, ISpecificationRepository };
