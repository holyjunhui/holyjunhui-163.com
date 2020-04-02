import axios from 'axios'
import qs from 'qs'
import {getToken} from './auth'

// create an axios instance
const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API, // api的base_url
    timeout: process.env.REACT_APP_REQUEST_TOME_OUT, // request timeout
    withCredentials: true,
    headers: {
        "Content-type": "application/json"
    },
    paramsSerializer(params) {
        // 针对get请求时需要对参数为空的字段进行处理
        // eg: =&page_size=page10&name=''&age=undefined  to page=null&page_size=1&name=null&age=null
        for (const key in params) {
            if (!params[key]) {
                params[key] = null;
            }
        }
        // 去除空字符串 eg：age=null&name="li" to name="li"
        const formatParams = qs.stringify(params, {skipNulls: true});
        // 对传入的参数进行重复便利  note:https://www.npmjs.com/package/qs
        return qs.stringify(qs.parse(formatParams), {
            arrayFormat: "repeat"
        });
    }
});

service.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});
service.interceptors.response.use(response=>{
	console.log("response",response)
	const body = response.data;
			if (body && !body.ok) {
				return Promise.reject(new Error(`${body.msg}`));
			}
	return body;
},async error=>{
	console.log("error",error)
})
export default service;