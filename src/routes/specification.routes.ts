import { Router } from 'express';

import SpecificationRepository from '../Modules/Cars/Repositories/SpecificationRepository';
import { CreateSpecification } from '../Modules/Cars/Services/CreateSpecification';

const specificationRoute = Router();
const repository = new SpecificationRepository();

specificationRoute.post('/', (req, res) => {
  const { name, description } = req.body;
  const create = new CreateSpecification(repository);
  create.execute({ name, description });
  res
    .status(201)
    .json({ message: 'Created register', data: name, description });
});

specificationRoute.get('/', (req, res) => {
  res.status(200).json(repository.list());
});

export default specificationRoute;
