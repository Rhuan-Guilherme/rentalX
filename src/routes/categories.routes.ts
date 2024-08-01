import { Router } from 'express';

import { categoryController } from '../Modules/Cars/useCase/CreateCategory/index';
import { listController } from '../Modules/Cars/useCase/ListCategory';

const categoriesRouter = Router();

categoriesRouter.post('/', (req, res) => categoryController.handle(req, res));

categoriesRouter.get('/', (req, res) => listController.handle(req, res));

export { categoriesRouter };
