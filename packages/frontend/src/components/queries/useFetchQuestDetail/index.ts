// PUT THE MAIN HOOK LOGIC HERE

import { useEffect, useState } from 'react'
import axios from 'axios'

import type { FetchQuestDetailParams, FetchQuestDetailResponse } from './useFetchBadgeDetail.types'
import { GET_COMMUNITY } from './userFetchBadgeDetail.constants'
import { stringify } from 'querystring'
import { Status } from '../common'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: FetchQuestDetailResponse | undefined): FetchQuestDetailResponse => {
  return {
    id: data?.id || 0,
    description: data?.description || '',
    title: data?.title || '',
    schemaHash: data?.schemaHash || '',
    condition: data?.condition || {
      type: '',
      detailType: 0,
    },
    engageScore: data?.engageScore || { number: 0, unit: '' },
    status: data?.status || Status.noStatus,
    message: data?.message || undefined,
    answer: data?.answer || undefined,
  }
}

// THIS IS OUR QUERY HOOOK
const useFetchQuestDetail = ({ groupId, questId, userId }: FetchQuestDetailParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<FetchQuestDetailResponse>(
    normalizeData(undefined) as FetchQuestDetailResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<FetchQuestDetailResponse>(
        `${GET_COMMUNITY}/?groupId=${groupId}&questId=${questId}&userId=${userId}`,
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

export default useFetchQuestDetail
