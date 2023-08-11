import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productMocks from '../../mocks/productMocks';
import { ServiceResponse } from '../../../src/types/Response';
import { Product } from '../../../src/types/Product';
import productService from '../../../src/services/product.service';
import productController from '../../../src/controllers/product.controller';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('testando camada controller do metodo post', async function() {
    const mockProduct = { name: 'test', price: '55.55', orderId: 9 }
    const mockResponse = { id: 1, ...mockProduct}
    req.body = mockProduct

    const response : ServiceResponse<Product> = {
      status: 'SUCCESSFUL',
      message: mockResponse
    }

    sinon.stub(productService, 'createProduct').resolves(response)

    await productController.createProduct(req, res)

    expect(res.status).to.have.been.calledWith(201)
    expect(res.json).to.have.been.calledWith(mockResponse)
  })
  it('testando camada controller do metodo getAllProduct', async function() {
    const mockResponse = productMocks.allProducts

    const response : ServiceResponse<Array<object>> = {
      status: 'SUCCESSFUL',
      message: mockResponse
    }

    sinon.stub(productService, 'getAllProduct').resolves(response)

    await productController.getAllProduct(req, res)

    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith(mockResponse)
  })
});
