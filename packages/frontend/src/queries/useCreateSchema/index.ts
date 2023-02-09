import axios from 'axios'
import { useState } from 'react'
import type { CreateSchemaParams, CreateSchemaBody } from './useCreateSchema.types'
import { CREATE_OFFER, CREATE_SCHEMA } from './useCreateSchema.constants'

const useCreateSchema = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const createSchema = async (params: CreateSchemaParams) => {
    setIsLoading(true)
    //should also get from server
    const token = params.token

    try {
      const res = await axios.post(
        CREATE_SCHEMA + params.issuerID + '/schemas',
        {
          technicalName: params.schemaBody.technicalName,
          schema: params.schemaBody.schema,
          mandatoryExpiration: params.schemaBody.mandatoryExpiration,
          attributes: params.schemaBody.attributes,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log(res)
      const schemaID = res.data.id
      const schemaHash = res.data.schemaHash

      const res2 = await axios.post(
        CREATE_SCHEMA + params.issuerID + '/schemas/' + schemaID + '/offers',
        {
          attributes: params.offerBody.attributes,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log(res2)
      const offerID = res2.data.id
      console.log(offerID)
      return schemaHash
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { createSchema, isLoading, error }
}

export default useCreateSchema
