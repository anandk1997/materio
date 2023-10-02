export interface AccountSettings {
  name: string
  email: string
  phone: string
  country: string
  // status: string
  state: string
}

export interface KYC {
  file: File
  fileName: string
}

export interface UpdatePassword {
  oldPassword: string
  password: string
  showNewPassword?: boolean
  confirmNewPassword?: string
  showCurrentPassword?: boolean
  showConfirmNewPassword?: boolean
}

export interface FileFormData {
  append(name: string, file: File, fileName?: string): void
}

export interface SuccessResponse {
  data: {
    statusCode: number
    statusMessage: string
    type: string
  }
}

export interface WalletAddress {
  address: string
  addressType: string
}
