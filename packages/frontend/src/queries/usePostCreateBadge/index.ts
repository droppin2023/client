import axios from 'axios'
import { useState } from 'react'
import useContractConnection from '../useContractConnection'
import { CREATE_BADGE } from './usePostCreateBadge.constants'
import type { CreateBadgeParams } from './usePostCreateBadge.types'

const usePostCreateBadge = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  const { badgeContract } = useContractConnection()

  // const badgeData = {
  //   requiredQuests: [1, 4, 2],
  //   engagePointsThreshold: 1000,
  //   badgePrice: parseEther('0.01'),
  //   name: 'Hacker Badge',
  //   NFT: ethers.constants.AddressZero,
  //   groupId: 1,
  //   symbol: 'HACK',
  //   URI: 'www.google.com',
  // }

  const createBadge = async (params: CreateBadgeParams) => {
    setIsLoading(true)
    setError(null)

    try {
      const tsx = await badgeContract?.addBadge(
        params.contract,
        params.contract.symbol,
        params.contract.URI,
      )

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
