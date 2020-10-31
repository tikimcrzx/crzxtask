import { Router } from 'express';
import { SignAuth, LoginAuth } from '../controllers/auth.controller';

export const AuthRoute = () => {
  const router = Router();
  router.route('/signin').post(SignAuth);
  router.route('/login').post(LoginAuth);
  return router;
};
