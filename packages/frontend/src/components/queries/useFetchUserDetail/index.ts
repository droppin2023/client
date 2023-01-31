// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { useEffect, useState } from 'react'

import { Status } from '../common'
import type { FetchUserDetailParams, FetchUserDetailResponse } from './useFetchUserDetail.types'
import { GET_USER } from './userFetchUserDetail.constants'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: FetchUserDetailResponse | undefined) => {
  return {
    username: data?.username || '',
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
        groupId: 0,
        groupName: '',
        address: '',
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
            groupId: 0,
            groupName: '',
            address: '',
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
            description: '',
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
      .get<{ data: FetchUserDetailResponse }>(`${GET_USER}/${username}`, {
        headers: {
          'Content-Type': '*/*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      })
      .then((data) => {
        console.log(data.data.data)
        setData(data.data.data)
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [])

  return { data: normalizeData(data), isLoading, error }
}

export default useFetchUserDetail
