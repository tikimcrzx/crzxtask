import { Schema, model, Document } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const User = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name the user'],
    },
    lastName: {
      type: String,
      required: [true, 'Please enter a lastName the user'],
    },
    phone: {
      type: String,
      required: [true, 'Please enter a phone the user'],
    },
    email: {
      type: String,
      required: [true, 'Please enter a email the user'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password the user'],
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Rol',
      },
    ],
    avatar: {
      type: String,
    },
    banner: {
      type: String,
    },
    state: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default model<IUser & Document>('User', User);
