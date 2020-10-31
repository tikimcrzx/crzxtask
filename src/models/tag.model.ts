import { ITag } from './../interfaces/ITag';
import { model, Schema, Document } from 'mongoose';

const Tag = new Schema(
  {
    tag: {
      type: String,
      required: true,
    },
    state: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default model<ITag & Document>('Tag', Tag);
