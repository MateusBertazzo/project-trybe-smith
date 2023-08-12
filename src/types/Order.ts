export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[]
};

export type OrderArrayProduct = {
  id: number;
  userId: number;
  productIds?: number[]
};

export type ServiceResponseSuccessOrder = {
  status: 'SUCCESSFUL', 
  message: Order[] | OrderArrayProduct[]
};

export type ServiceResponseErrorOrder = {
  status: 'SUCCESSFUL', 
  message: string
};

export type ResponseApi = ServiceResponseSuccessOrder | ServiceResponseErrorOrder;
