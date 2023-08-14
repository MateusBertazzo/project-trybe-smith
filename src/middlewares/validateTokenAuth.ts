// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// const secret = process.env.JWT_SECRET || 'loginUser';

// const verifyTokenUser = (tokenUser: string) => jwt.verify(tokenUser, secret);

// const validateToken = (req: Request, res: Response, next: NextFunction) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({ message: 'token not found' });
//   }
//   const bearer = authorization.includes('Bearer') ? authorization.split(' ')[1] : authorization;

//   try {
//     const tokenUser = verifyTokenUser(bearer);
//     req.body.token = tokenUser;
//     next();
//   } catch (error) {
//     return res.status(400).json({ message: 'invalid token' });
//   }
// };

// export default {
//   validateToken,
// };