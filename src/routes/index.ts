import { Router } from 'express';

import { categoriesRouter } from './categories.routes';
import { specificationRoute } from './specification.routes';

const router = Router();
router.use('/categories', categoriesRouter);
router.use('/specification', specificationRoute);

export default router;
