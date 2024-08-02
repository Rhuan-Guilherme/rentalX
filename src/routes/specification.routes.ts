/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { Router } from 'express';

import { specificationController } from '../Modules/Cars/useCase/CreateSpecification';

const specificationRoute = Router();

specificationRoute.post('/', (req, res) =>
  specificationController.handle(req, res),
);

// specificationRoute.get('/', (req, res) => {
//   // res.status(200).json(repository.list());
// });

export { specificationRoute };
