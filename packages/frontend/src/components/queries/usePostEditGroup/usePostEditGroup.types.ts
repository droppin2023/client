// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

export interface EditGroupParams {
  name: string
  link: string
  logo: string
  description: string
  category: string
  discord?: string
}
