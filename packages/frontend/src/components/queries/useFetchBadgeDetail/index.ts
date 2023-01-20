// PUT THE MAIN HOOK LOGIC HERE

import { useEffect, useState } from 'react'
import axios from 'axios'

import type { FetchBadgeDetailParams, FetchBadgeDetailResponse } from './useFetchBadgeDetail.types'
import { GET_COMMUNITY } from './userFetchBadgeDetail.constants'
import { stringify } from 'querystring'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: FetchBadgeDetailResponse | undefined): FetchBadgeDetailResponse => {
  return {
    id: data?.id || 0,
    description: data?.description || '',
    name: data?.name || '',
    requiredPrice: data?.requiredPrice || {
      number: 0,
      unit: '',
    },
    requiredEngageScore: data?.requiredEngageScore || {
      number: 0,
      unit: '',
    },
    logo: data?.logo || '',
    symbol: data?.symbol || '',
    community: data?.community || {
      id: 0,
      account: '',
      image: '',
      name: '',
    },
    holderList: data?.holderList || [
      {
        id: 0,
        address: '',
        image: '',
        name: '',
      },
    ],
    isDefault: data?.isDefault || false,
    address: data?.address || '',
    requiredQuests: data?.requiredQuests || [
      {
        questType: 0,
        questList: [
          {
            id: 0,
            name: '',
            engageScore: 0,
          },
        ],
      },
    ],
  }
}

// THIS IS OUR QUERY HOOOK
const useFetchBadgeDetail = ({ badgeId }: FetchBadgeDetailParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<FetchBadgeDetailResponse>(
    normalizeData(undefined) as FetchBadgeDetailResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<FetchBadgeDetailResponse>(`${GET_COMMUNITY}/?id=${badgeId}`, {
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

export default useFetchBadgeDetail
