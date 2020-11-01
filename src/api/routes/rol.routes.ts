import { Router } from 'express';
import { authMiddleware, checkRoles } from '../../middlewares';
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
  router.use(
    checkRoles(['5f9b091dd0d9e839bcda84ea', '5f9b0924d0d9e839bcda84eb']),
  );
  router.route('/').post(CreateRol).get(GetAllRoles);
  router.route('/:_id').patch(UpdateRole).get(GetByIdRol).delete(DeleteByIdRol);
  return router;
};
