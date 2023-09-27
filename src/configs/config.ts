import { authToken } from '@/constants/auth'
import { getCookie } from 'cookies-next'

export const config = {
  API_URL: 'http://64.227.136.131:3005/api/v1',
}

const cookieToken = getCookie(authToken)
export const headers = {
  headers: {
    Authorization: `Bearer ${cookieToken}`,
  },
}
