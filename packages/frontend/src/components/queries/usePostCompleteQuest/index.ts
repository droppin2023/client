import { useState } from 'react'
import coreContractAbi from '@shared/abis/CoreFacet.json'
import type { PostCompleteQuestParams } from './usePostCompleteQuest.types'
import { useContract, useSigner } from 'wagmi'

const usePostCompleteQuest = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { data: signer } = useSigner()

  const coreContract = useContract({
    address: '0x1c8aBb04C8Ab9a105ee2c44b13398E98fC12E6d4',
    abi: coreContractAbi,
    signerOrProvider: signer,
  })
  const completeQuest = async (params: PostCompleteQuestParams) => {
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

  return { completeQuest, isLoading, error }
}

export default usePostCompleteQuest
