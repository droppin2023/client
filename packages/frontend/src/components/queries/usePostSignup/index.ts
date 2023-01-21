import { useState } from 'react'
import axios from 'axios'
import type { SignupParams } from './usePostSignup.types'
import { SIGNUP } from './usePostSignup.constants'

const usePostSignup = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const postSignup = async (params: SignupParams) => {
    setIsLoading(true)

    try {
      const { data, status } = await axios.post(SIGNUP, params)

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

  return { postSignup, isLoading, error }
}

export default usePostSignup
