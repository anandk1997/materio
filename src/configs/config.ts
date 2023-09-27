import { authToken } from '@/constants/auth'
import { getCookie } from 'cookies-next'

export const config = {
  API_URL: 'https://indersein.dev/api/v1',
}

const cookieToken = getCookie(authToken)
export const headers = {
  headers: {
    Authorization: `Bearer ${cookieToken}`,
  },
}
