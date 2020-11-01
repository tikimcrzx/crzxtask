import { NextFunction, Request, Response } from 'express';

export const checkRoles = (roles: string[]) => {
  return async (req: any, res: Response, next: NextFunction) => {
    for (let index = 0; index < roles.length; index++) {
      if (req.user.roles.indexOf(roles[index]) > -1) {
        return next();
      }
    }
    res.status(403).json({ error: 'Permission Access' });
  };
};
