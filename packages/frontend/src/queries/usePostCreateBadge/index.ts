import { uploadImage } from '@helpers/imageUtils'
import axios from 'axios'
import { useState } from 'react'
import useContractConnection from '../useContractConnection'
import { CREATE_BADGE } from './usePostCreateBadge.constants'
import type { CreateBadgeParams } from './usePostCreateBadge.types'

const usePostCreateBadge = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  const { badgeContract } = useContractConnection()

  const createBadge = async (params: CreateBadgeParams) => {
    setIsLoading(true)
    setError(null)

    try {
      // upload image
      const uploadUrl = await uploadImage(params.contract.URI)
      const tsx = await badgeContract?.addBadge(params.contract, params.contract.symbol, uploadUrl)
      const transactionHash = await tsx.wait()

      console.log('CREATE BADGE CONTRACT', { transactionHash })

      const { data, status } = await axios.post(CREATE_BADGE, {
        transactionHash: transactionHash.transactionHash,
        description: params.description,
        name: params.name,
      })

      if (status === 200) {
        setIsLoading(false)
        return data
      }
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { createBadge, isLoading, setIsLoading, error }
}

export default usePostCreateBadge
