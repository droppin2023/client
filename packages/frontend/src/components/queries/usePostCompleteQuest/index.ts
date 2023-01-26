import { useState } from 'react'
import type { PostCompleteQuestParams } from './usePostCompleteQuest.types'
import axios from 'axios'
import { CREATE_GROUP } from '../usePostCreateGroup/usePostCreateBadge.constants'

const usePostCompleteQuest = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const completeQuest = async (params: PostCompleteQuestParams) => {
    setIsLoading(true)

    try {
      const { data, status } = await axios.post(CREATE_GROUP, {
        params,
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
