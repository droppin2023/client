import axios from 'axios'
import { useState } from 'react'
import type { PostCompleteQuestParams } from './usePostCompleteQuest.types'
import { COMPLETE_QUEST_URL } from './usePostCompleteQuests.constants'

const usePostCompleteQuest = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const completeQuest = async (params: PostCompleteQuestParams) => {
    setIsLoading(true)

    try {
      const { data, status } = await axios.post(COMPLETE_QUEST_URL, {
        ...params,
      })

      if (status === 200) {
        setIsLoading(false)
        return data.data
      }

      // throw new Error('Form Post Error!')
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { completeQuest, isLoading, error }
}

export default usePostCompleteQuest
