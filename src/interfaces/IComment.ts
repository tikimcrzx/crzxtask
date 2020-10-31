import { IUser } from './IUser';

export interface IComment {
  _id: string;
  author: IUser[];
  comment: string;
  state?: boolean;
}

export interface ICommentInput {
  author: IUser[];
  comment: string;
  state?: boolean;
}
