// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { useEffect, useState } from 'react'
import { CHECK_ADMIN_URL } from './useCheckAdmin.constants'

import type { CheckAdminParams, CheckAdminResponse } from './userCheckAdmin.types'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: CheckAdminResponse | undefined) => {
  return {
    isAdmin: data?.isAdmin || false,
  }
}

// THIS IS OUR QUERY HOOOK
const useCheckAdmin = ({ communityId, username }: CheckAdminParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<CheckAdminResponse>(
    normalizeData(undefined) as CheckAdminResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<CheckAdminResponse>(`${CHECK_ADMIN_URL}/${communityId}/${username}`, {
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
  }, [communityId, username])

  return { data: normalizeData(data), isLoading, error }
}

export default useCheckAdmin
