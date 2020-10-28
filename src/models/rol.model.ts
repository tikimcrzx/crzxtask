import { Schema, model, Document } from 'mongoose';
import { IRol } from '../interfaces/IRol';

const Rol = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name rol'],
      unique: true,
    },
    state: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default model<IRol & Document>('Rol', Rol);
