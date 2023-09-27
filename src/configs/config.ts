import { authToken } from '@/constants/auth'
import { getCookie } from 'cookies-next'

export const config = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
}

const cookieToken = getCookie(authToken)
export const headers = {
  headers: {
    Authorization: `Bearer ${cookieToken}`,
  },
}
