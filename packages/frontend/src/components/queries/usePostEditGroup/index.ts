import { useState } from 'react'
import axios from 'axios'
import type { CreateGroupParams } from './usePostEditGroup.types'
import { CREATE_GROUP } from './usePostEditGroup.constants'

const usePostEditGroup = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const editGroup = async (params: CreateGroupParams) => {
    setIsLoading(true)

    try {
      const { data, status } = await axios.post(CREATE_GROUP, params)

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

  return { editGroup, isLoading, error }
}

export default usePostEditGroup
