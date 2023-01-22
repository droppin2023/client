// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

export interface CreateGroupParams {
  name: string
  link: string
  logo: string
  description: string
  category: string
  discord?: string
}
