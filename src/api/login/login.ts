import request from "../../utils/request";
/**
 * 获取基础的配置信息
 */
export const getMeta = (params:any):any => {
  return request({
    url: "/v1/meta",
    method: "get",
    params
  });
};

/**
 * 获取验证码
 */
export const getCaptcha = ():any => {
  return request({
    url: "/v1/captcha",
    method: "get"
  });
};

/**
 * 用户登录
 * @param {Object} params
 */
export const login = (params:any, data:any):any => {
    return request({
        url: "/v1/login",
        method: "post",
        params,
        data
    });
};

/**
 * 登录之后获取信息
 * @param {Object} params
 */
export const getUserInfo =  (token:any):any=> {
    return request({
        url: "/v1/user-info",
        method: "get",
        params: {
            token
        }
    });
};