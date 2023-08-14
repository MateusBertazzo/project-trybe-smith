import express from 'express';
import routeProduct from './routes/product.route';
import routeOrder from './routes/order.route';
import routeLogin from './routes/login.route';

const app = express();

app.use(express.json());
app.use(routeProduct);
app.use(routeOrder);
app.use(routeLogin);

export default app;
