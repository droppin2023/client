// PUT THE MAIN HOOK LOGIC HERE

import { useEffect, useState } from 'react'
import axios from 'axios'

import type {
  FetchPendingQuestsParams,
  FetchPendingQuestsResponse,
} from './useFetchPendingQuests.types'
import { GET_COMMUNITY } from './userFetchPendingQuests.constants'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (
  data: FetchPendingQuestsResponse | undefined,
): FetchPendingQuestsResponse => {
  return {
    pendingQuests: [
      {
        quest: {
          id: data?.pendingQuests[0].quest.id || 0,
          name: data?.pendingQuests[0].quest.name || '',
          engageScore: data?.pendingQuests[0].quest.engageScore || { number: 0, unit: '' },
          description: data?.pendingQuests[0].quest.description || '',
        },
        requestUser: {
          username: data?.pendingQuests[0].requestUser.username || '',
          address: data?.pendingQuests[0].requestUser.address || '',
          image: data?.pendingQuests[0].requestUser.image || '',
          name: data?.pendingQuests[0].requestUser.name || '',
        },
        requestAnswer: data?.pendingQuests[0].requestAnswer || '',
      },
    ],
  }
}

// THIS IS OUR QUERY HOOOK
const useFetchPendingQuests = ({ groupId, username }: FetchPendingQuestsParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<FetchPendingQuestsResponse>(
    normalizeData(undefined) as FetchPendingQuestsResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<FetchPendingQuestsResponse>(
        `${GET_COMMUNITY}/?groupId=${groupId}&username=${username}`,
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

export default useFetchPendingQuests
