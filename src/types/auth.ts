export interface Signup {
  email: string
  sponsorId: string
  name: string
}

export interface Signin {
  userId: string
  password: string
}

export interface ErrorResponse {
  response: {
    data: {
      statusCode: number
      statusMessage: string
      type: string
    }
  }
}

export interface SuccessResponse {
  data: {
    statusCode: number
    statusMessage: string
    type: string
    data: {
      token: string
    }
  }
}
