import { Reducer} from 'redux'
import { IAction } from "../types"
import { getToken, setToken, removeToken } from "../../utils/auth";


export interface UserToken {
	token:string
}
export interface UserState {
	token:string | null;
	avatar?:string;
	name?:string;
	id?:number;
	role?:[];
}
export const defaultUser: UserState = {
  token: getToken(),
  avatar: '',
	name:"",
  role: [],
  id: 0
};
export const setUserToken :(token: UserToken) => IAction<UserToken> = (token:UserToken) => ({
	type:"SET_USER_TOKEN",
	payload:token
})
export const setUserInfo : (user:UserState) => IAction<UserState> = (user:UserState) => ({
	type:'SET_USER_INFO',
	payload:user
});

export const logout:() => IAction<null> = () => ({
	type:'SET_USER_LOGOUT',
	payload: null
})

const userReducer: Reducer<UserState, IAction<any>> = (
	state = defaultUser,
	action: IAction<any>
) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_USER_TOKEN":
		setToken(payload);
		console.log("222222222",state)
		return Object.assign({}, state, {
      token:payload
    });
		case 'SET_USER_INFO':
			console.log("111111111", state, defaultUser);
			setToken(payload.token);
			return (
				{
				...payload
				}
			);
		case 'SET_USER_LOGOUT':
			removeToken();
			return {
				...defaultUser
			};
		default:
			return state;
	}
}
export default userReducer;