import ProductModel from '../models/product.model';
import { Product } from '../../types/Product';
import { ServiceResponse } from '../../types/Response';

const createProduct = async (body: Product) : Promise<ServiceResponse<Product>> => {
  const product = await ProductModel.create(body);

  return { status: 'SUCCESSFUL', message: product.dataValues };
};

export default {
  createProduct,
};