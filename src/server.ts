import express from 'express';
import swaggerUi from 'swagger-ui-express';

import router from './routes';
import swaggerConfig from './swagger.json';

const app = express();
const PORT = 3333;
app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.listen(PORT, () => {
  console.log('Server is runnig!');
});
