import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('testa se não passado username corretamente retorna erro', async function(){
    const notExistUsername = {
      id: 1,
      username: '',
      password: 'ldsaldlasldas'
    }
    const response = await chai.request(app).post('/login').send(notExistUsername)

    expect(response).to.have.status(400)
  })
});
