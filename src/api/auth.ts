import axios from 'axios'
import { config } from '@/configs/config'
import { Signin, Signup } from '@/types/auth'

export const signUp = (params: Signup) =>
  axios.post(`${config.API_URL}/auth/signup`, params)

export const signIn = (params: Signin) =>
  axios.post(`${config.API_URL}/auth/signin`, params)
