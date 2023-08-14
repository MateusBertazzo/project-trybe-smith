import { Request, Response } from 'express';

import loginService from '../services/login.service';

const signin = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  const { status, message } = await loginService.signin(username, password);

  if (status === 'UNAUTHORIZED') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  return res.status(200).json(message);
};

export default {
  signin,
};