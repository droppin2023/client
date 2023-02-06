// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

export interface CheckLoginParams {
  address: string
}

export interface CheckLoginResponse {
  isSignedUp: boolean
  username?: string
  msg?: string
}
