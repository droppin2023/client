// PUT THE MAIN HOOK LOGIC HERE

import { useEffect, useState } from 'react'
import axios from 'axios'

import {
  Category,
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
    category: data?.category || Category.Other,
    discord: data?.discord || '',
    description: data?.description || '',
    owner: data?.owner || {
      id: 0,
      address: '',
      image: '',
      name: '',
    },
    totalEngage: data?.totalEngage || { number: 0, unit: '' },
    members: data?.members || [
      {
        id: 0,
        address: '',
        image: '',
        name: '',
      },
    ],
    totalMember: data?.totalMember || 0,
    blockchain: data?.blockchain || '',
    link: data?.link || '',
    badges: data?.badges || [
      {
        id: 0,
        logo: '',
        name: '',
        description: '',
        groupId: 0,
        isClaimed: false,
        groupName: 'Lepak DAO',
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
const useFetchCommunityDetail = ({ communityId }: FetchCommunityDetailParams) => {
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

export default useFetchCommunityDetail
