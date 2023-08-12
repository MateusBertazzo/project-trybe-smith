export type Order = {
  id: number;
  userId: number;
  productId?: number;
  productIds?: { id: number }[]
};

export type OrderArray = {
  id: number;
  userId: number;
  productIds?: number[]
};

export type ServiceResponseSuccessOrder = {
  status: 'SUCCESSFUL', 
  message: Order[] | OrderArray[]
};

export type ServiceResponseErrorOrder = {
  status: 'SUCCESSFUL', 
  message: string
};

export type ResponseApi = ServiceResponseSuccessOrder | ServiceResponseErrorOrder;
