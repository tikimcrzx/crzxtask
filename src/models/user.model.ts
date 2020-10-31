import { NextFunction } from 'express';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
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
      unique: true,
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

User.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
};

User.methods.comparePassword = function (password: string): Boolean {
  return compareSync(password, this.password);
};

User.pre('save', async function (next: NextFunction) {
  const user: any = this;

  if (!user.isModified('password')) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
});

export default model<IUser & Document>('User', User);
