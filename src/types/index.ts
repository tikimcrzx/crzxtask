import { Document, Model } from 'mongoose';
import { IComment, IPost, IRol, ITag, IUser } from '../interfaces';

export type commentModel = Model<IComment & Document>;
export type postModel = Model<IPost & Document>;
export type rolModel = Model<IRol & Document>;
export type tagModel = Model<ITag & Document>;
export type userModel = Model<IUser & Document>;
