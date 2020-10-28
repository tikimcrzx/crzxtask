import { IRol } from './../interfaces/IRol';
import { Service, Inject } from 'typedi';
import { GenericResponse } from '../class/Generic';
import config from '../config';
import { IRolInput } from '../interfaces/IRol';
import { rolModel } from '../types';
import {
  getByIdElement,
  getAllElements,
  insertOneElement,
  updateElement,
  deleteElement,
} from '../lib/db-operations';

const codeRequest = config.CodeRequest;

@Service()
export default class RolService {
  constructor(
    @Inject('rolModel') private rolModel: rolModel,
    @Inject('logger') private logger,
  ) {}

  async createRol(request: IRolInput): Promise<GenericResponse> {
    return await insertOneElement(
      request,
      this.rolModel,
      this.logger,
      'Rol canoot be created',
      'Rol Created Ok',
    );
  }

  async getRoles(
    request: IRol,
    pageSize: any,
    pageNum: any,
  ): Promise<GenericResponse> {
    return await getAllElements(
      this.rolModel,
      this.logger,
      'Get All Roles',
      pageSize,
      pageNum,
    );
  }

  async getRole(_id: string): Promise<GenericResponse> {
    return await getByIdElement(
      _id,
      this.rolModel,
      this.logger,
      'Rol Not Found',
      'Get Rol Ok!',
    );
  }

  async updateRole(_id: string, request: IRol): Promise<GenericResponse> {
    return await updateElement(
      _id,
      request,
      this.rolModel,
      this.logger,
      'Rol cannot be updated',
      'Update Role Success!',
    );
  }

  async deleteRole(_id: string): Promise<GenericResponse> {
    return await deleteElement(
      _id,
      this.logger,
      this.rolModel,
      'Rol Not Found',
      'Delete Rol Ok!',
    );
  }
}
