import axios from 'axios'
import { config } from '@/configs/config'

export const signUp = (email, sponsorId, name) =>
  axios.post(`${config.API_URL}/auth/signup`, {
    email,
    sponsorId,
    name,
  })
