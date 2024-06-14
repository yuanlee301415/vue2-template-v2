/*
 * 接口请求
 * */

import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 1000 * 20 // request timeout
})

// request interceptor
service.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('appKey')}`
        if (!config.params) {
            config.params = {}
        }
        config.params.user = localStorage.getItem('email')
        return config
    },
    (error) => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    (response) => {
        return response.data
        // if the custom code is not 20000, it is judged as an error.
        /*
    if (res.code !== 0) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
*/
    },
    (error) => {
        console.log('service.interceptors.response>error:') // for debug
        console.error(error)

        // 请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
            console.warn('请求超时')
            console.error('请求超时，请稍后再试！')
            return Promise.reject(error)
        }

        // 接口报错
        console.error(error.response.data.message || '系统繁忙，请稍后再试！')
        return Promise.reject(error)
    }
)

export default service
