import { Router } from 'express';

import productController from '../controllers/product.controller';

const routeProduct = Router();

routeProduct.post('/products', productController.createProduct);

export default routeProduct;