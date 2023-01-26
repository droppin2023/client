import { useState } from 'react'
import type { PostSubmitQuest } from './userPostSubmitQuest.types'
import axios from 'axios'
import { CREATE_GROUP } from '../usePostCreateGroup/usePostCreateBadge.constants'

const usePostSubmitQuest = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const submitQuest = async (params: PostSubmitQuest) => {
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

  return { submitQuest, isLoading, error }
}

export default usePostSubmitQuest
