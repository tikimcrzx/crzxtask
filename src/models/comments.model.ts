import { IComment } from './../interfaces/IComment';
import { model, Schema, Document } from 'mongoose';

const Comment = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: [true, 'Author is required'],
    },
    comment: {
      type: String,
      required: [true, 'Comment is reqired is not empty'],
    },
  },
  { timestamps: true },
);

export default model<IComment & Document>('Comment', Comment);
