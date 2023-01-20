// PUT THE MAIN HOOK LOGIC HERE

import { useEffect, useState } from 'react'
import axios from 'axios'

import type {
  FetchCommunityDetailParams,
  FetchCommunityDetailResponse,
} from './useFetchCommunityDetail.types'
import { GET_COMMUNITY } from './userFetchCommunityDetail.constants'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (
  data: FetchCommunityDetailResponse | undefined,
): FetchCommunityDetailResponse => {
  return {
    id: data?.id || 0,
    logo: data?.logo || '',
    name: data?.name || '',
    category: data?.category || '',
    discord: data?.discord || undefined,
    description: data?.description || '',
    engageUnit: data?.engageUnit || '',
    owner: data?.owner || {
      id: 0,
      account: '',
      image: '',
    },
    totalEngage: data?.totalEngage || 0,
    members: data?.members || [
      {
        id: 0,
        account: '',
        image: '',
      },
    ],
    totalMember: data?.totalMember || 0,
    blockchain: data?.blockchain || '',
    links: data?.links || undefined,
    badges: data?.badges || [
      {
        id: 0,
        logo: '',
        name: '',
        description: '',
      },
    ],
    quests: data?.quests || [
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
const useFetchCommunityList = ({ communityId }: FetchCommunityDetailParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<FetchCommunityDetailResponse>(
    normalizeData(undefined) as FetchCommunityDetailResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<FetchCommunityDetailResponse>(`${GET_COMMUNITY}/?id=${communityId}`, {
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

export default useFetchCommunityList
