import { SIGNUP } from './usePostSignup.constants'
import type { SignupParams } from './usePostSignup.types'
import axios from 'axios'
import { useState } from 'react'

async function callSummonApi(walletAddress: string, email: string, discordUserId: string) {
  const tenantKey = '358368999175618628'
  const featureKey = 'user.joined'
  const apiToken = process.env.NEXT_PUBLIC_SUMMON_API

  console.log('Sending', {
    featureKey,
    walletAddress,
    email,
    tenantKey,
  })

  return fetch('https://sandbox-api.summon.xyz/v1/xps/job/integration/action', {
    method: 'POST',
    headers: {
      Authentication: `bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      featureKey,
      walletAddress,
      email,
      tenantKey,
    }),
  })
    .then((x) => x.json())
    .then((x) => console.log('Response', featureKey, x))
    .catch((err) => console.warn(err))
}

const usePostSignup = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const postSignup = async (params: SignupParams) => {
    setIsLoading(true)

    try {
      const { data, status } = await axios.post(SIGNUP, params)
      await callSummonApi(params.address, 'gayeongparkk@gmail.com', params.username)
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
