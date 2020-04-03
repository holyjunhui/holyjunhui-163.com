// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

// import { createStore, Store } from "redux";
// import reducer from "./reducer";
import { Reducer } from "redux";
import { IAction } from "../types";

import { getToken, setToken, removeToken } from "../../utils/auth";

export interface UserState {
  token: string | null;
  avatar?: string;
  name?: string;
  id?: number;
  role?: [];
}
export const defaultUser: UserState = {
  token: getToken(),
  avatar: "",
  name: "",
  role: [],
  id: 0
};
export type Action =
  | {
      type: "setToken";
      token: string;
    }
  | {
      type: "logout";
      token: string;
    };

const userReducer: Reducer<UserState, IAction<any>> = (
  state = defaultUser,
  action: IAction<any>
) => {
  const { type, token } = action;

  switch (type) {
    case "setToken":
      setToken(token);
      console.log("222222222", state);
      return Object.assign({}, state, {
        token: token
      });
    case "logout":
      removeToken();
      return {
        ...defaultUser
      };
    default:
      return state;
  }
};
export default userReducer;


// export function makeStore(): Store<UserState, Action> {
//   return createStore(userReducer, INITIAL_STATE);
// }
