import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app'

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('testando camada Service metodo Post', async function() {
    // Arrange
    const mockProduct = { name: 'test', price: '55.55', orderId: 9 }
    const productBuild = ProductModel.build(mockProduct)
    
    sinon.stub(ProductModel, 'create').resolves(productBuild)
    // Act
    const response = await chai.request(app).post('/products').send(mockProduct)
    // Assert

    expect(response.status).to.be.equal(201)
    expect(response.body).to.be.an('object')
  })
});
