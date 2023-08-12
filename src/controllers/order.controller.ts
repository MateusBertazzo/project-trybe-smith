import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
  const allOrders = await orderService.getAllOrders();

  return res.status(200).json(allOrders.message);
};

export default {
  getAllOrders,
};