import { useState } from 'react'
import type { PostCompleteQuestParams } from './usePostCompleteQuest.types'
import useContractConnection from '../useContractConnection'

const usePostCompleteQuest = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { coreContract } = useContractConnection()

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
