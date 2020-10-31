import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IUserInput } from '../../interfaces/IUser';
import AuthService from '../../services/auth.service';

export async function SignAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const logger: any = Container.get('logger');
  logger.debug('Calling method SignAuth endpoint with body %o', req.body);

  try {
    const authServiceInstance = Container.get(AuthService);
    const response = await authServiceInstance.signAuth(req.body as IUserInput);
    return res.status(201).json(response);
  } catch (e) {
    logger.error('error: %o', e);
    return next(e);
  }
}

export async function LoginAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const logger: any = Container.get('logger');
  logger.debug('Calling method SignAuth endpoint with body %o', req.body);

  try {
    const authServiceInstance = Container.get(AuthService);
    const { email, password } = req.body;
    const response = await authServiceInstance.loginAuth(email, password);
    return res.send(response);
  } catch (e) {
    logger.error('error: %o', e);
    return next(e);
  }
}
