import axios from 'axios'
import { config, headers } from '@/configs/config'
import {
  AccountSettings,
  FileFormData,
  KYC,
  UpdatePassword,
  WalletAddress,
} from '@/types/accountSettings'

export const editProfile = async (params: AccountSettings) =>
  await axios.post(`${config.API_URL}/profile`, params, headers)

export const updateKYC = async (params: KYC) =>
  await axios.post(`${config.API_URL}/profile`, params, headers)

export const updatePassword = async (params: UpdatePassword) =>
  await axios.post(`${config.API_URL}/profile/password`, params, headers)

export const uploadPic = async (params: FileFormData) =>
  await axios.post(`${config.API_URL}/file/upload`, params, headers)

export const walletAddress = async (params: WalletAddress) =>
  await axios.post(`${config.API_URL}/profile/walletAddress`, params, headers)
