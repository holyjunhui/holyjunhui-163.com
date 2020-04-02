import { UserState } from "./module/user";
// import { AppState } from "./module/app";

export interface IStoreState {
  // app: AppState;
  user: UserState;
}

export interface IAction<T> {
  type: string;
  payload: T;
}
