export interface IUser {
  _id: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  avatar?: string;
  banner?: string;
  state?: boolean;
}

export interface IUserInput {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  avatar?: string;
  banner?: string;
}
