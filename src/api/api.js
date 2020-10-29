/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';

// import store from '../store/index'

// 环境的切换
// if (process.env.NODE_ENV === 'development') {//测试
    axios.defaults.baseURL = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat',//腾讯闲聊api
// } else if (process.env.NODE_ENV === 'test') {//验收
//     axios.defaults.baseURL = 'http://www.test.com';
// } else if (process.env.NODE_ENV === 'production') {//正式生产
//     axios.defaults.baseURL = 'http://www.pro.com';
// }

// 请求超时时间
axios.defaults.timeout = 5000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 判断是否存在token，如果存在，则统一在http请求的header都加上token
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况 
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录    
                // 未登录则跳转登录页面，并携带当前页面的路径    
                // 在登录成功后返回当前页面，这一步需要在登录页操作。    
                case 401:
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    });
                    break;
                // 403 token过期    
                // 登录过期对用户进行提示    
                // 清除本地token和清空vuex中token对象    
                // 跳转登录页面    
                case 403:
                    this.$toast('登录过期，请重新登录');
                    // 清除token     
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);     // 不太懂的话可不对状态码进行操作
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;
                // 404请求不存在    
                case 404:
                    this.$toast('网络请求不存在');
                    break;
                // 其他错误，直接抛出错误提示    
                default:
                    this.$toast(error.response.data.message);
            }
            return Promise.reject(error.response);
        }
    }
);

/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/**
 * 封装delete方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function axiosDelete(url, params) {
    return new Promise((resolve, reject) => {
        axios.delete(url, { params: params })
            .then(response => { // 这里传递的参数不做处理
                resolve(response)
            }, err => {
                reject(err)
            }).catch((error) => {
                reject(error)
            })
    })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function axiosPatch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, QS.stringify(data), Headers)
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
    })
}