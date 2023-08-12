import { Router } from 'express';

import productController from '../controllers/product.controller';
import validateProductInput from '../middlewares/validateProductInput';

const routeProduct = Router();

routeProduct.post(
  '/products', 
  validateProductInput.validateName, 
  validateProductInput.validatePrice,
  productController.createProduct,
);

routeProduct.get('/products', productController.getAllProduct);

export default routeProduct;