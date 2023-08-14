import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/Response';

const secret = process.env.JWT_SECRET || 'secret';

const generateToken = (payload: string): string => {
  const token = JWT.sign(payload, secret);
  return token;
};

const signin = async (username: string, password: string): 
Promise<ServiceResponse<object>> => {
  const getUser = await UserModel.findOne({ where: { username } });

  if (!getUser || !bcrypt.compareSync(password, getUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', message: 'Username or password invalid' };
  }

  const objectToken = {
    id: getUser.dataValues.id,
    username: getUser.dataValues.username,
  };

  const tokenUser = generateToken(JSON.stringify(objectToken));
  // const tokenUser = generateToken(getUser.dataValues.username);

  return { status: 'SUCCESSFUL', message: { token: tokenUser } };
};

export default {
  signin,
};