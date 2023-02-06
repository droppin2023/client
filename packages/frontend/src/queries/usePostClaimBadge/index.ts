import axios from 'axios'
import { useState } from 'react'
import useContractConnection from '../useContractConnection'
import type { PostClaimBadgeParams } from './usePostClaimBadge.types'
import { COMPLETE_BADGE } from './userPostClaimBadge.constants'

const usePostClaimBadge = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { badgeContract } = useContractConnection()

  const claimBadge = async (params: PostClaimBadgeParams) => {
    setIsLoading(true)

    try {
      const tsx = await badgeContract?.claimBadge(params.badgeId)
      const transaction = await tsx.wait()
      console.log({ transaction })
      console.log(badgeContract)
      console.log(params)
      const res = await axios.post(COMPLETE_BADGE, {
        transactionHash: transaction.transactionHash,
      })
      return res
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { claimBadge, isLoading, error }
}

export default usePostClaimBadge
