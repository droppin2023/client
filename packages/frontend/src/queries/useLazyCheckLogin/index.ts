// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { useState } from 'react'

import { CHECK_LOGIN_URL } from './useLazyCheckLogin.constants'
import type { CheckLoginParams, CheckLoginResponse } from './useLazyCheckLogin.types'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: CheckLoginResponse | undefined) => {
  return {
    isSignedUp: data?.isSignedUp || false,
    username: data?.username || '',
    msg: data?.msg || '',
  }
}

// THIS IS OUR QUERY HOOOK
const useLazyCheckLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  const checkLogin = async ({ address }: CheckLoginParams) => {
    setIsLoading(true)

    try {
      const res = await axios.get<CheckLoginResponse>(`${CHECK_LOGIN_URL}/${address}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      setIsLoading(false)

      if (res.status === 200) {
        return normalizeData(res.data)
      }

      throw 'Check Login Error'
    } catch (e: any) {
      if (e.status === 400) {
        setError(new Error('User not registered'))
        return normalizeData(e.response.data)
      } else setError(e)

      setIsLoading(false)
    }
  }

  return { checkLogin, isLoading, error }
}

export default useLazyCheckLogin
