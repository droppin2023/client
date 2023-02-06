// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

export interface CheckAdminParams {
  communityId: number
  username: string
}

export interface CheckAdminResponse {
  isAdmin: boolean
}
