import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ResponseApi } from '../types/Order';

const getAllOrders = async (): Promise<ResponseApi> => {
  const allOrders = await OrderModel.findAll({
    include: [{ model: ProductModel, attributes: ['id'], as: 'productIds' }],
  });

  console.log(allOrders);

  const objectList = allOrders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: order.dataValues.productIds?.map((product) => product.id),
  }));
  console.log(objectList);

  return { status: 'SUCCESSFUL', message: objectList };
};

export default {
  getAllOrders,
};