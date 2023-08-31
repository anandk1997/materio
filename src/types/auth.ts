export interface Signup {
  email: string
  sponsorId: string
  name: string
}

export interface Signin {
  userId: string
  password: string
  showPassword?: boolean
}

export interface SignupResponse {
  data: {
    statusCode: number
    statusMessage?: string
    type: string
    data: {
      token?: string
    }
  }
}
