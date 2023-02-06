import axios from 'axios'
import { formatBytes32String } from 'ethers/lib/utils.js'
import { useState } from 'react'
import useContractConnection from '../useContractConnection'
import { CREATE_GROUP } from './usePostCreateBadge.constants'
import type { CreateGroupParams } from './usePostCreateBadge.types'

const usePostCreateGroup = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>()
  const { coreContract } = useContractConnection()

  const createGroup = async (params: CreateGroupParams) => {
    setIsLoading(true)
    setError(null)
    try {
      const tsx = await coreContract?.createGroup(formatBytes32String(params.name))
      const transactionHash = await tsx?.wait()

      const res = await axios.post(CREATE_GROUP, {
        transactionHash: transactionHash.transactionHash,
        ...params,
      })

      console.log('CREATE COMMUNITY SERVER RESPONSE', res.data)

      setIsLoading(false)
      return res.data
    } catch (e) {
      setIsLoading(false)
      setError(e)

      console.error(e)
    }
  }

  return { createGroup, isLoading, error }
}

export default usePostCreateGroup
