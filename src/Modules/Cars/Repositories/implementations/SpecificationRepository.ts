import Specification from '../../Models/Specification';
import {
  ISpecificationRepository,
  ICreateSpecification,
} from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private repository: Array<Specification>;
  // eslint-disable-next-line no-use-before-define
  private static INSTACE: SpecificationRepository;

  private constructor() {
    this.repository = [];
  }

  public static getInstace() {
    if (!SpecificationRepository.INSTACE) {
      SpecificationRepository.INSTACE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTACE;
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
