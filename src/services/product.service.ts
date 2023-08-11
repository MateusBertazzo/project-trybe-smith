import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/Response';

const createProduct = async (body: Product) : Promise<ServiceResponse<Product>> => {
  const product = await ProductModel.create(body);

  return { status: 'SUCCESSFUL', message: product.dataValues };
};

const getAllProduct = async (): Promise<ServiceResponse<Array<object>>> => {
  const allProduct = await ProductModel.findAll();
  console.log(allProduct);

  return { status: 'SUCCESSFUL', message: allProduct };
};

export default {
  createProduct,
  getAllProduct,
};