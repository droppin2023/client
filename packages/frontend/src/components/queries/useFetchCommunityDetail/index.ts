// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { useEffect, useState } from 'react'

import { ethers } from 'ethers'
import { GET_COMMUNITY } from './useFetchCommunityDetail.constants'
import {
  Category,
  FetchCommunityDetailParams,
  FetchCommunityDetailResponse,
} from './useFetchCommunityDetail.types'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: FetchCommunityDetailResponse | undefined) => {
  const normalizedQuests = []

  for (let i = 0; i < (data?.quests || []).length; i++) {
    const normalizedQuest = { ...data?.quests[i] }

    normalizedQuest['engageScore'] = { number: 0, unit: '' }
    normalizedQuest['engageScore']['number'] = ethers.BigNumber.from(
      normalizedQuest.engagePoints,
    ).toNumber()
    normalizedQuest['engageScore']['unit'] = data?.name.slice(0, 3).toUpperCase() as string

    normalizedQuests.push({ ...normalizedQuest })
  }

  return {
    id: data?.id || 0,
    logo: data?.logo || '',
    name: data?.name || '',
    category: data?.category || Category.Other,
    discord: data?.discord || {
      link: '',
      guildId: 0,
    },
    description: data?.description || '',
    owner: data?.owner || {
      username: '',
      address: '',
      image: '',
      name: '',
    },
    totalEngage: data?.totalEngage || { number: 0, unit: '' },
    members: data?.members || [],
    totalMember: data?.totalMember || 0,
    blockchain: data?.blockchain || '',
    link: data?.link || '',
    badges: data?.badges || [],
    quests: normalizedQuests,
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
      .get<{ data: FetchCommunityDetailResponse }>(`${GET_COMMUNITY}/${communityId}`, {
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
  }, [communityId])

  return { data: normalizeData(data), isLoading, error }
}

export default useFetchCommunityDetail
