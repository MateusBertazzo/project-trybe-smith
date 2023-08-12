import { Router } from 'express';

import ordersController from '../controllers/order.controller';

const routeOrder = Router();

routeOrder.get('/orders', ordersController.getAllOrders);

export default routeOrder;