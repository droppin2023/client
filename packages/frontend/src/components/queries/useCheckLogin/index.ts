// PUT THE MAIN HOOK LOGIC HERE

import { useEffect, useState } from 'react'
import axios from 'axios'

import type { CheckLoginParams, CheckLoginResponse } from './useCheckLogin.types'
import { GET_COMMUNITY } from './useCheckLogin.constants'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: CheckLoginResponse | undefined): CheckLoginResponse => {
  return {
    isLogined: data?.isLogined || false,
    username: data?.username || '',
  }
}

// THIS IS OUR QUERY HOOOK
const useFetchQuestDetail = ({ address }: CheckLoginParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<CheckLoginResponse>(
    normalizeData(undefined) as CheckLoginResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<CheckLoginResponse>(`${GET_COMMUNITY}/?address=${address}`, {
        headers: {
          'Content-Type': '*/*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      })
      .then((data) => {
        setData(data.data)
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [])

  return { data: normalizeData(data), isLoading, error }
}

export default useFetchQuestDetail
