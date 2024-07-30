// eslint-disable-next-line import-helpers/order-imports
import { Router } from 'express';
import CategoryRepository from '../Modules/Cars/Repositories/CategoryRepository';
import CreateCategoryService from '../Modules/Cars/Services/CreateCategoryService';

const categoriesRouter = Router();
const categoryRepository = new CategoryRepository();

categoriesRouter.post('/', (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);
  createCategoryService.excute({ name, description });

  return res.status(201).json({
    message: 'Dados cadastrados com sucesso',
    data: categoryRepository,
  });
});

categoriesRouter.get('/', (req, res) => {
  const list = categoryRepository.list();
  res.status(200).json(list);
});

export { categoriesRouter };
