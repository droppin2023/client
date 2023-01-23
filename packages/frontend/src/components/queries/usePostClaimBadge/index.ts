import { useState } from 'react'
import axios from 'axios'
import badgeContractAbi from '@shared/abis/BadgeFacet.json'
import type { PostClaimBadgeParams } from './usePostClaimBadge.types'
import { useContract, useSigner } from 'wagmi'

const usePostClaimBadge = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { data: signer } = useSigner()

  const badgeContract = useContract({
    address: '0x1c8aBb04C8Ab9a105ee2c44b13398E98fC12E6d4',
    abi: badgeContractAbi,
    signerOrProvider: signer,
  })

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
