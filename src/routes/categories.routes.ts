// eslint-disable-next-line import-helpers/order-imports
import { Router } from 'express';
import CategoryRepository from '../Modules/Cars/Repositories/CategoryRepository';
import { categoryController } from '../Modules/Cars/useCase/CreateCategory/index';

const categoriesRouter = Router();
const categoryRepository = new CategoryRepository();

categoriesRouter.post('/', (req, res) => categoryController.handle(req, res));

categoriesRouter.get('/', (req, res) => {
  const list = categoryRepository.list();
  res.status(200).json(list);
});

export { categoriesRouter };
