import axios from 'axios'
import { useState } from 'react'
import useContractConnection from '../useContractConnection'
import { CREATE_QUEST } from './usePostCreateQuest.constants'
import type { CreateQuestParams } from './usePostCreateQuest.types'

const usePostCreateQuest = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { coreContract } = useContractConnection()

  const createQuest = async (params: CreateQuestParams) => {
    setIsLoading(true)
    setError(null)
    try {
      const tsx = await coreContract?.addQuest(params.contract)

      const transactionHash = await tsx.wait()

      const { data, status } = await axios.post(CREATE_QUEST, {
        transactionHash: transactionHash.transactionHash,
        condition: params.condition,
        detail: params.detail,
        name: params.name,
      })

      if (status === 200) {
        setIsLoading(false)
        return data
      }

      throw new Error('Form Post Error!')
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { createQuest, isLoading, error }
}

export default usePostCreateQuest
