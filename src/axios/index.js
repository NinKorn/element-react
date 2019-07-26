import axios from 'axios'
import baseURL from './api'

axios.defaults.baseURL = baseURL;


// axios.interceptors.request.use(
//     config => {
//         if (store.state.user) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
//             console.log('添加');
//             config.headers.Authorization = `userId${store.state.user.userId} sessionId ${store.state.user.sessionId}`;
//         }
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });

export default axios