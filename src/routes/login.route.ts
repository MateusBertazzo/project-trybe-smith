import { Router } from 'express';

import loginController from '../controllers/login.controller';
import validateLoginInput from '../middlewares/validateLoginInput';

const routeLogin = Router();

routeLogin.post('/login', validateLoginInput.validateLogin, loginController.signin);

export default routeLogin;