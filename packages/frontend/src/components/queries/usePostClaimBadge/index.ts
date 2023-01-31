import { useState } from 'react'
import type { PostClaimBadgeParams } from './usePostClaimBadge.types'
import useContractConnection from '../useContractConnection'
import axios from 'axios'
import { COMPLETE_BADGE } from './userPostClaimBadge.constants'

const usePostClaimBadge = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { badgeContract } = useContractConnection()

  const claimBadge = async (params: PostClaimBadgeParams) => {
    setIsLoading(true)
    console.log(params, badgeContract)
    try {
      const tsx = await badgeContract?.claimBadge(params.badgeId)
      const transactionHash = await tsx.wait()
      console.log({ transactionHash })
      const res = await axios.post(COMPLETE_BADGE, {
        transactionHash,
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
