import { useState } from 'react'
import axios from 'axios'
import type { CreateQuestParams } from './usePostCreateQuest.types'
import { CREATE_QUEST } from './usePostCreateQuest.constants'
import useContractConnection from '../useContractConnection'

const usePostCreateQuest = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { coreContract } = useContractConnection()

  const createQuest = async (params: CreateQuestParams) => {
    setIsLoading(true)
    setError(null)
    try {
      console.log(coreContract, params, params.contract)
      const tsx = await coreContract?.addQuest(params.contract)
      console.log(tsx)
      const transactionHash = await tsx.wait()
      console.log({ transactionHash }, transactionHash.transactionHash)
      const { data, status } = await axios.post(CREATE_QUEST, {
        transactionHash: transactionHash.transactionHash,
        // schemaHash: params.schemaHash,
        condition: JSON.stringify(params.condition),
        detail: params.detail,
        name: params.contract.name,
      })

      if (status === 200) {
        setIsLoading(false)
        return data.data
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
