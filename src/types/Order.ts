export type Order = {
  id: number;
  userId: number;
  productId?: number;
  productsIds?: { id: number }[]
};

export type ServiceResponseSuccessOrder = {
  status: 'SUCCESSFUL', 
  message: Order[]
};

export type ServiceResponseErrorOrder = {
  status: 'SUCCESSFUL', 
  message: string
};

export type ResponseApi = ServiceResponseSuccessOrder | ServiceResponseErrorOrder;
