type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'BAD_REQUEST';

export type ServiceResponseError = {
  status: ServiceResponseErrorType, 
  message: string
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL', 
  message: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;