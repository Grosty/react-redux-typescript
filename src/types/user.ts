export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserState {
  users: IUser[];
  loading: boolean;
  error: null | string;
}

export enum UserActionType {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

export interface FetchUsersAction {
  type: UserActionType.FETCH_USERS;
}

export interface FetchUsersSuccessAction {
  type: UserActionType.FETCH_USERS_SUCCESS;
  payload: IUser[];
}

export interface FetchUsersErrorAction {
  type: UserActionType.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;
