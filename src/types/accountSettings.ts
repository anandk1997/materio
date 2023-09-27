export interface AccountSettings {
  name: string
  email: string
  contact: string
  country: string
  status: string
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
