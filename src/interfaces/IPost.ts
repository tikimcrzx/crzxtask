import { IComment } from './IComment';
import { ITag } from './ITag';

export interface IPost {
  _id: string;
  title: string;
  banner: string;
  content: string;
  tags: ITag[];
  comments?: IComment[];
  state?: boolean;
}

export interface IPostInput {
  title: string;
  banner: string;
  content: string;
  tags: ITag[];
  comments?: IComment[];
  state?: boolean;
}
