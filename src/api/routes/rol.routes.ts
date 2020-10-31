import { Router } from 'express';
import { authMiddleware } from '../../middlewares';
import {
  CreateRol,
  GetAllRoles,
  GetByIdRol,
  UpdateRole,
  DeleteByIdRol,
} from '../controllers/rol.controller';

export const RolRoute = () => {
  const router = Router();
  router.use(authMiddleware);
  router.route('/').post(CreateRol).get(GetAllRoles);
  router.route('/:_id').patch(UpdateRole).get(GetByIdRol).delete(DeleteByIdRol);
  return router;
};
