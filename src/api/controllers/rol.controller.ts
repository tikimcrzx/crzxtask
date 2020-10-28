import { IRol } from './../../interfaces/IRol';
import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { IRolInput } from '../../interfaces/IRol';
import RolService from '../../services/rol.service';

export async function CreateRol(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const logger: any = Container.get('logger');
  logger.debug('Calling method CreateRol endpoint with body %o', req.body);

  try {
    const rolServiceInstance = Container.get(RolService);
    const response = await rolServiceInstance.createRol(req.body as IRolInput);
    return res.status(201).json(response);
  } catch (e) {
    logger.error('error: %o', e);
    return next(e);
  }
}

export async function GetAllRoles(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const logger: any = Container.get('logger');
  logger.debug('Calling method GetAllRoles endpoint with body %o', req.body);

  try {
    const rolServiceInstance = Container.get(RolService);
    const { pageSize, pageNum } = req.query;

    const response = await rolServiceInstance.getRoles(
      req.body as IRol,
      pageSize,
      pageNum,
    );
    return res.send(response);
  } catch (e) {
    logger.error('error: %o', e);
    throw next(e);
  }
}

export async function GetByIdRol(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const logger: any = Container.get('logger');
  logger.debug('Calling method GetByIdRol endpoint with body %o', req.body);

  try {
    const rolServiceInstance = Container.get(RolService);
    const { _id } = req.params;
    const response = await rolServiceInstance.getRole(_id);
    return res.send(response);
  } catch (e) {
    logger.error('error: %o', e);
    throw next(e);
  }
}

export async function UpdateRole(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const logger: any = Container.get('logger');
  logger.debug('Calling method UpdateRole with body %o', req.body);

  try {
    const rolServiceInstance = Container.get(RolService);
    const { _id } = req.params;
    const response = await rolServiceInstance.updateRole(_id, req.body as IRol);
    return res.send(response);
  } catch (e) {
    logger.error('error: %o', e);
    throw next(e);
  }
}

export async function DeleteByIdRol(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const logger: any = Container.get('logger');
  logger.debug('Calling method DeleteByIdRol endpoint with body %o', req.body);

  try {
    const rolServiceInstance = Container.get(RolService);
    const { _id } = req.params;
    const response = await rolServiceInstance.deleteRole(_id);
    return res.send(response);
  } catch (e) {
    logger.error('error: %o', e);
    throw next(e);
  }
}
