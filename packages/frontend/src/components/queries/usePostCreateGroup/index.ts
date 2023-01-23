import { useState } from 'react'
import axios from 'axios'
import type { CreateGroupParams } from './usePostCreateBadge.types'
import { CREATE_GROUP } from './usePostCreateBadge.constants'
import useContractConnection from '../useContractConnection'

const usePostCreateGroup = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { coreContract } = useContractConnection()

  const createGroup = async (params: CreateGroupParams) => {
    setIsLoading(true)

    try {
      const tsx = await coreContract?.createGroup(params.name)
      const transactionHash = await tsx.wait()
      console.log({ transactionHash })
      const { data, status } = await axios.post(CREATE_GROUP, {
        transactionHash,
        ...params,
      })

      if (status === 200) {
        setIsLoading(false)
        return data.data
      }

      throw new Error('Form Post Error!')
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { createGroup, isLoading, error }
}

export default usePostCreateGroup
