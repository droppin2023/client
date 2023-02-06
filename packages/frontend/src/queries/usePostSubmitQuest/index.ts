import axios from 'axios'
import { useState } from 'react'
import { SUBMIT_QUEST_URL } from './userPostSubmitQuest.constants'
import type { PostSubmitQuest } from './userPostSubmitQuest.types'

const usePostSubmitQuest = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const submitQuest = async (params: PostSubmitQuest) => {
    setIsLoading(true)

    try {
      const { data, status } = await axios.post(SUBMIT_QUEST_URL, params)

      if (status === 200) {
        setIsLoading(false)
        return data.data
      }
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { submitQuest, isLoading, error }
}

export default usePostSubmitQuest
