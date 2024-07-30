import express from 'express';

import { categoriesRouter } from './routes/categories.routes';
import specificationRoute from './routes/specification.routes';

const app = express();
const PORT = 3333;
app.use(express.json());

app.use('/categories', categoriesRouter);
app.use('/specification', specificationRoute);

app.listen(PORT, () => {
  console.log('Server is runnig!');
});
