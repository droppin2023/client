// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

export interface CreateSchemaParams {
  issuerID: string
  schemaBody: CreateSchemaBody
  offerBody: CreateOfferBody
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