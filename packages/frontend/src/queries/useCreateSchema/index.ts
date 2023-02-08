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
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzU4NjU2ODcsImp0aSI6ImJmY2U5YzljLTdjZjctNGFhYy1hOWJhLTA4ZTI4NDdiZTY5OCIsImlhdCI6MTY3NTc3OTI4NywibmJmIjoxNjc1Nzc5Mjg3LCJzdWIiOiIyYzdhMGFlMy03ODYxLTRhYWEtOWEzMC1lNjk0ODNhYmFhODYiLCJzY29wZSI6ImFwaSIsImFjY291bnQiOnsidmVyaWZpZWQiOmZhbHNlLCJvcmdhbml6YXRpb24iOiIxNDFiNTY4YS03MGYxLTQ3MjYtYTAyYy1hMDcwOWQyYjMyZjUiLCJyb2xlIjoiT1dORVIiLCJlbWFpbCI6ImRyb3BwaW4yMDIyMjNAZ21haWwuY29tIn19.DcboAIrTeQpzF7l92jtUL52RkB8L8ptiC1V9Kb8rf58'

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
      return schemaHash
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { createSchema, isLoading, error }
}

export default useCreateSchema
