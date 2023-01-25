// PUT THE MAIN HOOK LOGIC HERE

import { useEffect, useState } from 'react'
import axios from 'axios'

import type { FetchUserDetailParams, FetchUserDetailResponse } from './useFetchUserDetail.types'
import { GET_COMMUNITY } from './userFetchUserDetail.constants'
import { stringify } from 'querystring'
import { Status } from '../common'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: FetchUserDetailResponse | undefined): FetchUserDetailResponse => {
  return {
    id: data?.id || 0,
    description: data?.description || '',
    name: data?.name || '',
    image: data?.image || '',
    discord: data?.discord || '',
    badges: data?.badges || [
      {
        id: 0,
        logo: '',
        name: '',
        description: '',
        isClaimed: false,
        groupId: 0,
        groupName: '',
      },
    ],
    communitiesWithBadge: data?.communitiesWithBadge || [
      {
        community: {
          id: 0,
          address: '',
          image: '',
          name: '',
        },
        badges: [
          {
            id: 0,
            logo: '',
            name: '',
            description: '',
            isClaimed: false,
            groupId: 0,
            groupName: '',
          },
        ],
      },
    ],

    engageScoresAndCommunity: data?.engageScoresAndCommunity || [
      {
        engageScore: {
          number: 0,
          unit: '',
        },
        community: {
          id: 0,
          address: '',
          image: '',
          name: '',
        },
      },
    ],
    userQuests: data?.userQuests || [
      {
        status: Status.accepted,
        quests: [
          {
            id: 0,
            name: '',
            engageScore: {
              number: 0,
              unit: 'LPD',
            },
          },
        ],
      },
    ],
  }
}

// THIS IS OUR QUERY HOOOK
const useFetchUserDetail = ({ username }: FetchUserDetailParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<FetchUserDetailResponse>(
    normalizeData(undefined) as FetchUserDetailResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<FetchUserDetailResponse>(`${GET_COMMUNITY}/?username=${username}`, {
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

export default useFetchUserDetail
