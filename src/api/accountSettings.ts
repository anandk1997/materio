import axios from 'axios'
import { config } from '@/configs/config'
import { AccountSettings } from '@/types/accountSettings'

export const editProfile = (params: AccountSettings) =>
  axios.post(`${config.API_URL}/auth/signup`, params)
