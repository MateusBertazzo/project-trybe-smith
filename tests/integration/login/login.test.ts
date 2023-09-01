import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('testa se não passado username corretamente retorna erro', async function(){
    const notExistUsername = {
      id: 1,
      username: '',
      password: '$2a$10$tTUQH83hmRxHwGIz6d.MUOaugJCsgfG0DIfY4.eq9Vm9cSITaidYu',
      vocation: 'Guerreiro', 
      level: 10 
    }

    const userInstance = UserModel.build(notExistUsername)

    sinon.stub(UserModel, 'findOne').resolves(userInstance)

    const response = await chai.request(app).post('/login').send(notExistUsername)

    expect(response).to.have.status(400)
    expect(response.body).to.be.deep.equal({ message: '"username" and "password" are required' })
  })
});
