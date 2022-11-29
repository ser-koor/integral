import axios from 'axios'

export default function request(config) {
  const instance = axios.create({
    baseURL: 'http://kumanxuan1.f3322.net:8881/cms/products/recommend',
    timeout: 5000
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  }),err => {
    return Promise.reject(err)
  }

  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }),err => {
    return Promise.reject(err)
  }
  return instance(config)
}