import localStorageUtils from '@helpers/localStorageUtils'
import axios, { AxiosInstance } from 'axios'

export function setInterceptors(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      console.log(err, 'errrrrrrrr')
      const { config, response } = err
      const originalRequest = config
      console.log(originalRequest, originalRequest.headers.Authorization)
      const { email, password } = localStorageUtils.read('polygon_id_user')
      console.log(response)
      if (response.status === 403 || response.status === 401) {
        console.log(response.status, 'statusaegaewaggwea')
        return axios
          .post(
            'https://api-staging.polygonid.com/v1/orgs/sign-in',
            {
              email,
              password,
            },
            {
              headers: {
                Authorization: originalRequest.headers.Authorization,
              },
            },
          )
          .then((res) => {
            console.log(res, 'gawegaewgewgws')
            const origianl = localStorageUtils.read('polygon_id_user')
            localStorageUtils.write('polygon_id_user', {
              ...origianl,
              token: res.data.token,
            })
            axios.defaults.headers.common['Authorization'] = res.data.token
          })
          .then(() => {
            originalRequest.headers.Authorization = `Bearer ${axios.defaults.headers.common['Authorization']}`
            console.log(originalRequest, 'new requagaewgewewagweg')
            return axios(originalRequest)
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        return Promise.reject(err)
      }
    },
  )

  return instance
}
