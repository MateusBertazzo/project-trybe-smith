import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ResponseApi } from '../types/Order';

const getAllOrders = async (): Promise<ResponseApi> => {
  const allOrders = await OrderModel.findAll({
    include: [{ model: ProductModel, attributes: ['id'], as: 'productIds' }],
  });

  const objectList = allOrders.map((order) => {
    const { id, userId, productIds } = order.dataValues;

    return {
      id, 
      userId,
      productIds: productIds?.map((product) => product.id),
    };
  });

  return { status: 'SUCCESSFUL', message: objectList };
};

export default {
  getAllOrders,
};