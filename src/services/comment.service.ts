import { commentModel } from './../types/index';
import { Inject, Service } from 'typedi';

@Service()
export default class CommentService {
  constructor(
    @Inject('commentModel') private commentModel: commentModel,
    @Inject('logger') private logger,
  ) {}
}
