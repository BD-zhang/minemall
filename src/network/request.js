import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeoutL: 5000
  })

  // 拦截器

  return instance(config)
}

export function requestLocal(config){
    const instance = axios.create({
        baseURL:'.././api',
        timeout:2000
    })

    return instance(config)
}
