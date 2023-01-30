// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { useState } from 'react'

import { Status } from '../common'
import type { FetchUserDetailParams, FetchUserDetailResponse } from './useLazyFetchUserDetail.types'
import { GET_COMMUNITY } from './userLazyFetchUserDetail.constants'

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
            description: '',
          },
        ],
      },
    ],
  }
}

// THIS IS OUR QUERY HOOOK
const useLazyFetchUserDetail = ({ username }: FetchUserDetailParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const fetchUserDetail = async () => {
    setIsLoading(true)

    try {
      const res = await axios.get<FetchUserDetailResponse>(
        `${GET_COMMUNITY}/?username=${username}`,
        {
          headers: {
            'Content-Type': '*/*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        },
      )

      setIsLoading(false)

      if (res.status === 200) {
        return normalizeData(res.data)
      }

      throw 'Fetch User Detail Failed'
    } catch (e: any) {
      setError(e.response.data.msg)
    }
  }

  return { fetchUserDetail, isLoading, error }
}

export default useLazyFetchUserDetail
