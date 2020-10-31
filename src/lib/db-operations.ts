import { GenericResponse } from './../class/Generic';
import { Model } from 'mongoose';
import config from '../config';

const codeRequest = config.CodeRequest;

/**
 * Insert One Element of Collection
 * @param document Element of Insert collection
 * @param model Model we are working with
 * @param logger Logs data information
 * @param messageError Error message the operations if failed :(
 * @param messageResponse Response message the opertion if success ok!
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

/**
 * Get All Elements of Collection
 * @param model Model we are working with
 * @param logger Logs data information
 * @param messageError Error message the operations if failed :(
 * @param messageResponse Response message the opertion if success ok!
 * @param pageSize Content size elements for pages
 * @param pageNum Pagination data
 */
export const getAllElements = async (
  model: Model<any>,
  logger: any,
  messageError: string,
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

    if (entities.length === 0) {
      response.message = messageError;
    }
    return response;
  } catch (e) {
    logger.error(e);
    throw e;
  }
};

/**
 * Get By Element For By Id of Collection
 * @param _id Id find element
 * @param model Model we are working with
 * @param logger Logs data information
 * @param messageError Error message the operations if failed :(
 * @param messageResponse Response message the opertion if success ok!
 */
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

/**
 * Get One Element of Collection
 * @param object Filter object
 * @param model Model we are working with
 * @param logger Logs data information
 * @param messageError Error message the operations if failed :(
 * @param messageResponse Response message the opertion if success ok!
 */
export const getOneElement = async (
  object: object,
  model: Model<any>,
  logger: any,
  messageError: string,
  messageResponse: string,
): Promise<GenericResponse> => {
  let response: GenericResponse = new GenericResponse();
  try {
    const entity = await model.findOne(object);
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

/**
 * Update One Element of Collection
 * @param _id Id find element
 * @param document Element of Updated collection
 * @param model Model we are working with
 * @param logger Logs data information
 * @param messageError Error message the operations if failed :(
 * @param messageResponse Response message the opertion if success ok!
 */
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

/**
 * Insert One Element of Collection
 * @param _id Id find element
 * @param logger Logs data information
 * @param model Model we are working with
 * @param messageError Error message the operations if failed :(
 * @param messageResponse Response message the opertion if success ok!
 */
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
