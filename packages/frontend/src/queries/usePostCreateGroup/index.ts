import axios from 'axios'
import { formatBytes32String } from 'ethers/lib/utils.js'
import { useState } from 'react'
import useContractConnection from '../useContractConnection'
import { CREATE_GROUP } from './usePostCreateBadge.constants'
import type { CreateGroupParams } from './usePostCreateBadge.types'

const usePostCreateGroup = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { coreContract } = useContractConnection()

  const createGroup = async (params: CreateGroupParams) => {
    setIsLoading(true)
    setError(null)
    console.log(params, coreContract)
    try {
      const tsx = coreContract?.createGroup(formatBytes32String(params.name))
      const transactionHash = await tsx.wait()
      console.log(transactionHash)
      console.log({ transactionHash })
      const { data, status } = await axios.post(CREATE_GROUP, {
        transactionHash: transactionHash.transactionHash,
        ...params,
      })

      if (status === 200) {
        setIsLoading(false)
        return data.data
      }
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { createGroup, isLoading, error }
}

export default usePostCreateGroup
