import express from 'express';
import routeProduct from './database/routes/product.route';

const app = express();

app.use(express.json());
app.use(routeProduct);

export default app;
