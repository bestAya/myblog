// import router from '../../router'
// import errorLog from './error.js'
import { stringify } from 'qs' // 引用qs（类似引用vue等--他是全局的）一种转换数据的工具  qs是webpack里的
// import {clearStorage} from 'service/utils.js'
import axios from 'axios'
// 192.168.1.8:8091
const debug = process.env.NODE_ENV !== 'production' // 判断当前网站环境,
// axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
// axios.defaults.method = 'POST';
axios.defaults.timeout = 15000 // 设置ajax请求超时时间，这里为10s
axios.defaults.withCredentials = true // 解决session
axios.defaults.transformRequest = [
  function (data, config) {
    // console.log(data);
    if (!config['Content-Type']) {
      return stringify(data)
    }
    switch (config['Content-Type']) {
      case 'application/x-www-form-urlencoded': {
        return stringify(data)
      }
      case 'multipart/form-data;charser=UTF-8': {
        return data
      }
    }
    // 为了避免qs格式化时对内层对象的格式化先把内层的对象转为
    // debug; //ajax请求前开始输出参数--debug:判断当前网站环境,
    // data.CustData = JSON.stringify(data.CustData);//stringify：格式化对象为json

    // data = stringify(data); //stringify：将json转成后端可接收的数据
  }
]

// axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded';

/* 添加拦截器 */
axios.interceptors.request.use(
  function (config) {
    if (localStorage.token) {
      var token = localStorage.token
      config.headers.Authorization = token
      // config.headers['Content-Type'] = 'multipart/form-data;charser=UTF-8';
    }
    // 在发送请求之前做某事
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // eslint-disable-next-line no-unused-expressions
    debug // ajax请求后开始输出参数
    if (response.data.status == 10002) {
      Toast.info('身份登陆过期，将重新登陆')
      localStorage.clear()
      router.push('/login?eid=' + store.state.loginname.eid)
    }
    if (response.data.status == 40003) {
      Toast.info('您没有操作的权限')
      router.push('/')
    }
    return response.data
  },
  function (error) {
    // console.log(error.response)
    // errorLog(error.response)
    if (error.response) {
      switch (error.response.status) {
        case 404:
          router.push('/404')
          break
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  }
)
export default {
  // get请求
  get (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param
      })
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // post请求
  post (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // Image请求
  Image (url, param, onUploadProgress) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param,
        onUploadProgress,
        headers: { 'Content-Type': 'multipart/form-data;charser=UTF-8' }
      })
        .then(res => {
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // all get
  allGet (fnArr) {
    return axios.all(fnArr)
  }
}
