import { Router } from 'express';
import {
  CreateRol,
  GetAllRoles,
  GetByIdRol,
  UpdateRole,
  DeleteByIdRol,
} from '../controllers/rol.controller';

export const RolRoute = () => {
  const router = Router();
  router.route('/rol').post(CreateRol).get(GetAllRoles);
  router
    .route('/rol/:_id')
    .patch(UpdateRole)
    .get(GetByIdRol)
    .delete(DeleteByIdRol);
  return router;
};
