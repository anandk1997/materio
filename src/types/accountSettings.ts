export interface AccountSettings {
  name: string
  email: string
  phone: string
  country: string
  // status: string
  state: string
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
