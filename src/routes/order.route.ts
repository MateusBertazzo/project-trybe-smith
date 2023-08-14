import { Router } from 'express';

import ordersController from '../controllers/order.controller';
// import validateTokenAuth from '../middlewares/validateTokenAuth';

const routeOrder = Router();

routeOrder.get('/orders', ordersController.getAllOrders);

export default routeOrder;