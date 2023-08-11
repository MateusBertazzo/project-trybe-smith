import { Request, Response } from 'express';
import productService from '../services/product.service';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, price, orderId } = req.body;
  const body = {
    name,
    price,
    orderId,
  };

  const product = await productService.createProduct(body);

  return res.status(201).json(product.message);
};

const getAllProduct = async (req: Request, res: Response) :Promise<Response> => {
  const allProducts = await productService.getAllProduct();

  return res.status(200).json(allProducts.message);
};

export default { 
  createProduct,
  getAllProduct,
};