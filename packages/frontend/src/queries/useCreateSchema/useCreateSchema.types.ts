// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

export interface CreateSchemaParams {
  issuerID: string
  token: string
  schemaBody: CreateSchemaBody
  offerBody: CreateOfferBody
  email: string
  password: string
}

export interface CreateSchemaBody {
  schema: string
  mandatoryExpiration: boolean
  attributes: attributeJSON[]
  technicalName: string
}

export interface attributeJSON {
  name: string
  type: string
  description: string
}

export interface CreateOfferBody {
  attributes: attributeJSONOffer[]
}

export interface attributeJSONOffer {
  attributeKey: string
  attributeValue: number
}
