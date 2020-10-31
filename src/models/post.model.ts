import { IPost } from './../interfaces/IPost';
import { model, Schema, Document } from 'mongoose';

const Post = new Schema(
  {
    title: {
      type: String,
      maxlength: 150,
      required: [true, 'Please enter a title the post'],
    },
    banner: {
      type: String,
      required: [true, 'Please submit image the post'],
    },
    content: {
      type: String,
      required: [true, 'Plese enter content'],
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        required: [true, 'Is required tags'],
        ref: 'Tag',
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        required: [true, 'Is required comments'],
        ref: 'Comment',
      },
    ],
    state: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default model<IPost & Document>('Post', Post);
