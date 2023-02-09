import axios from 'axios'
import { setInterceptors } from './interceptor'
import { SERVER_URL } from '@constants/serverConfig'

function withAuth() {
  const instance = axios.create({
    baseURL: SERVER_URL,
  })

  return setInterceptors(instance)
}

export const withAuthInstance = withAuth()
