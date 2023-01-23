import { useState } from 'react'
import type { PostClaimBadgeParams } from './usePostClaimBadge.types'
import useContractConnection from '../useContractConnection'

const usePostClaimBadge = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { badgeContract } = useContractConnection()

  const claimBadge = async (params: PostClaimBadgeParams) => {
    setIsLoading(true)

    try {
      const tsx = await badgeContract?.claimBadge(params.badgeId)
      const transactionHash = await tsx.wait()
      console.log({ transactionHash })

      throw new Error('Form Post Error!')
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { claimBadge, isLoading, error }
}

export default usePostClaimBadge
