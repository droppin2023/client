import { useState } from 'react'
import coreContractAbi from '@shared/abis/CoreFacet.json'
import type { PostCompleteQuestParams } from './usePostCompleteQuest.types'
import { useContract, useSigner } from 'wagmi'

const usePostClaimBadge = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { data: signer } = useSigner()

  const coreContract = useContract({
    address: '0x1c8aBb04C8Ab9a105ee2c44b13398E98fC12E6d4',
    abi: coreContractAbi,
    signerOrProvider: signer,
  })
  const claimBadge = async (params: PostCompleteQuestParams) => {
    setIsLoading(true)

    try {
      const tsx = await coreContract?.completeQuest(params.questId)
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
