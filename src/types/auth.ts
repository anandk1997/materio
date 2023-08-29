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
