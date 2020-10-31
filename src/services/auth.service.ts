import { IUserInput } from './../interfaces/IUser';
import { GenericResponse } from './../class/Generic';
import { userModel } from './../types/index';
import { Inject, Service } from 'typedi';
import JWT from '../lib/jwt';

import config from '../config';
import { insertOneElement } from '../lib/db-operations';

const codeRequest = config.CodeRequest;

@Service()
export default class AuthService {
  constructor(
    @Inject('userModel') private userModel: userModel,
    @Inject('logger') private logger,
  ) {}

  async loginAuth(email: string, password: string): Promise<GenericResponse> {
    let response: GenericResponse = new GenericResponse();

    try {
      const user: any = await this.userModel.findOne({ email });
      const isValid = user.comparePassword(password);

      if (!user) throw new Error('User not Found');
      else if (!isValid) throw new Error('User or Password Incorrect');

      response.code = codeRequest.OK;
      response.message = 'User Ok!';
      response.data = new JWT().sign({ user }, 24 * 60 * 60);
      return response;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  async signAuth(request: IUserInput): Promise<GenericResponse> {
    return await insertOneElement(
      request,
      this.userModel,
      this.logger,
      'User canoot be created',
      'User Register Ok',
    );
  }
}
