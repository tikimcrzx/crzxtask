export interface ITag {
  _id: string;
  tag: string;
  state?: boolean;
}

export interface ITagInput {
  tag: string;
  state?: boolean;
}
