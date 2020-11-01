import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

export const authMiddleware = (req: any, res: Response, next: NextFunction) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    throw new Error('Token be must send');
  }

  jwt.verify(token, config.jwtSecrect, function (err, decode) {
    if (err) {
      throw new Error('Invalid Token');
    }
    req.user = decode.user;
  });

  next();
};
