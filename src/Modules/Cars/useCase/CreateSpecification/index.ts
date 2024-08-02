import SpecificationRepository from '../../Repositories/implementations/SpecificationRepository';
import CreateSpecificationController from './CreateSpecificationController';
import { CreateSpecificationService } from './CreateSpecificationService';

const repository = SpecificationRepository.getInstace();
const specificationService = new CreateSpecificationService(repository);
const specificationController = new CreateSpecificationController(
  specificationService,
);

export { specificationController };
