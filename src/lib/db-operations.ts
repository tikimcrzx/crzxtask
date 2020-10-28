import { GenericResponse } from './../class/Generic';
import { Model } from 'mongoose';
import config from '../config';

const codeRequest = config.CodeRequest;

/**
 * Insert One Element of Collection
 * @param database Database we are working with
 * @param collection Database Collection
 * @param document Element of Insert collection
 */
export const insertOneElement = async (
  document: Object,
  model: Model<any>,
  logger: any,
  messageError: string,
  messageResponse: string,
): Promise<GenericResponse> => {
  let response: GenericResponse = new GenericResponse();

  try {
    const entity = await model.create(document);
    if (!entity) throw new Error(messageError);
    response.code = codeRequest.OK;
    response.message = messageResponse;
    response.data = entity;
    return response;
  } catch (e) {
    logger.error(e);
    throw e;
  }
};

export const getAllElements = async (
  model: Model<any>,
  logger: any,
  messageResponse: string,
  pageSize: any = 5,
  pageNum: any = 1,
): Promise<GenericResponse> => {
  let response: GenericResponse = new GenericResponse();
  try {
    const size: number = parseInt(pageSize);
    const skips: number = size * (pageNum - 1);
    const entities = await model.find().skip(skips).limit(size);
    response.code = codeRequest.OK;
    response.message = messageResponse;
    response.data = entities;
    return response;
  } catch (e) {
    logger.error(e);
    throw e;
  }
};

export const getByIdElement = async (
  _id: string,
  model: Model<any>,
  logger: any,
  messageError: string,
  messageResponse: string,
): Promise<GenericResponse> => {
  let response: GenericResponse = new GenericResponse();
  try {
    const entity = await model.findById(_id);
    if (!entity) throw new Error(messageError);
    response.code = codeRequest.OK;
    response.message = messageResponse;
    response.data = entity;
    return response;
  } catch (e) {
    logger.error(e);
    throw e;
  }
};

export const updateElement = async (
  _id: string,
  document: Object,
  model: Model<any>,
  logger: any,
  messageError: string,
  messageResponse: string,
): Promise<GenericResponse> => {
  let response: GenericResponse = new GenericResponse();
  try {
    const entity = await model.findByIdAndUpdate(_id, document, {
      new: true,
    });
    if (!entity) throw new Error(messageError);
    response.code = codeRequest.OK;
    response.message = messageResponse;
    response.data = entity;
    return response;
  } catch (e) {
    logger.error(e);
    throw e;
  }
};

export const deleteElement = async (
  _id: string,
  logger: any,
  model: Model<any>,
  messageError: string,
  messageResponse: string,
): Promise<GenericResponse> => {
  let response: GenericResponse = new GenericResponse();
  try {
    const entity = await model.findByIdAndDelete(_id);
    if (!entity) throw new Error(messageError);
    response.code = codeRequest.OK;
    response.message = messageResponse;
    response.data = entity;
    return response;
  } catch (e) {
    logger.error(e);
    throw e;
  }
};
