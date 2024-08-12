import { Router } from 'express';
import multer from 'multer';

import { categoryController } from '../Modules/Cars/useCase/CreateCategory/index';
import { importController } from '../Modules/Cars/useCase/ImportCategory';
import { listController } from '../Modules/Cars/useCase/ListCategory';

const categoriesRouter = Router();
const upload = multer({
  dest: './tmp',
});

categoriesRouter.post('/', (req, res) => {
  categoryController.handle(req, res);
});

categoriesRouter.get('/', (req, res) => listController.handle(req, res));

categoriesRouter.post('/import', upload.single('file'), (req, res) => {
  importController.handle(req, res);
});

export { categoriesRouter };
