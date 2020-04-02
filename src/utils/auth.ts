const tokenKey = 'token-key';

export const getToken = () => localStorage.getItem(tokenKey)
export const setToken = (data:any):any => localStorage.setItem(tokenKey, data)
export const removeToken = () => localStorage.removeItem(tokenKey);