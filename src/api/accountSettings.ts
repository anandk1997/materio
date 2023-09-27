import axios from 'axios'
import { config, headers } from '@/configs/config'
import { AccountSettings, WalletAddress } from '@/types/accountSettings'

export const editProfile = (params: AccountSettings) =>
  axios.post(`${config.API_URL}/auth/signup`, params)

export const walletAddress = async (params: WalletAddress) =>
  axios.post(`${config.API_URL}/profile/walletAddress`, params, headers)
