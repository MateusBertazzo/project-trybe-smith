import { Router } from 'express';

import productController from '../controllers/product.controller';

const routeProduct = Router();

routeProduct.post('/products', productController.createProduct);
routeProduct.get('/products', productController.getAllProduct);

export default routeProduct;