// PUT THE MAIN HOOK LOGIC HERE

import { useEffect, useState } from 'react'
import axios from 'axios'

import type { CheckAdminParams, CheckAdminResponse } from './userCheckAdmin.types'
import { GET_COMMUNITY } from './useCheckAdmin.constants'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: CheckAdminResponse | undefined): CheckAdminResponse => {
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
      .get<CheckAdminResponse>(
        `${GET_COMMUNITY}/?communityId=${communityId}&username=${username}`,
        {
          headers: {
            'Content-Type': '*/*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        },
      )
      .then((data) => {
        setData(data.data)
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [])

  return { data: normalizeData(data), isLoading, error }
}

export default useCheckAdmin
