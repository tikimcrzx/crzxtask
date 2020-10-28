import { Document, Model } from 'mongoose';
import { IRol } from '../interfaces/IRol';
import { IUser } from '../interfaces/IUser';

export type rolModel = Model<IRol & Document>;
export type userModel = Model<IUser & Document>;
