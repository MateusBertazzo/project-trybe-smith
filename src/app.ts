import express from 'express';
import routeProduct from './routes/product.route';
import routeOrder from './routes/order.route';

const app = express();

app.use(express.json());
app.use(routeProduct);
app.use(routeOrder);

export default app;
