import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service';



describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('testando camada Service metodo Post', async function() {
    const mockProduct = { name: 'test', price: '55.55', orderId: 9 }
    const productBuild = ProductModel.build(mockProduct)

    sinon.stub(ProductModel, 'create').resolves(productBuild)

    const response = await productService.createProduct(mockProduct)

    expect(response.status).to.be.equal('SUCCESSFUL')
    expect(response.message).to.be.deep.equal(productBuild.dataValues)
  })
});
