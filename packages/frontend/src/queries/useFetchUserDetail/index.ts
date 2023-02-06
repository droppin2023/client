// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'

import { QuestType, Status } from '../common'
import type { FetchUserDetailParams, FetchUserDetailResponse } from './useFetchUserDetail.types'
import { GET_USER } from './userFetchUserDetail.constants'

export const normalizeData = (data: FetchUserDetailResponse | undefined) => {
  // normalize badges
  const normalizedBadges = []
  for (let i = 0; i < (data?.badges || []).length; i++) {
    const entry = data?.badges[i]
    const normalizedBadge = {
      id: entry?.id || -1,
      image: entry?.image || '',
      name: entry?.name || '',
      description: entry?.description || '',
      groupId: entry?.groupId || -1,
    }

    normalizedBadges.push(normalizedBadge)
  }

  const normalizedCommunitiesWithBadge = []
  for (let i = 0; i < (data?.communitiesWithBadge || []).length; i++) {
    const entry = data?.communitiesWithBadge[i]

    const normalizedCommunityWithBadge = {
      community: {
        id: entry?.community.id || 0,
        address: entry?.community.address || '',
        image: entry?.community.image || '',
        name: entry?.community.name || '',
      },
      badges: normalizedBadges.filter((item) => item.groupId === entry?.community.id),
    }

    normalizedCommunitiesWithBadge.push(normalizedCommunityWithBadge)
  }

  const normalizedDiscord = {
    id: data?.discord?.id || '',
    name: data?.discord?.name || '',
    discriminator: data?.discord?.discriminator || '',
  }

  // normalize engageScore
  const normalizedEngageScoresAndCommunities = []
  for (let i = 0; i < (data?.engageScoresAndCommunity || []).length; i++) {
    const entry = data?.engageScoresAndCommunity[i]

    const normalizedEngageScoreAndCommunity = {
      community: {
        id: entry?.community.id || 0,
        address: entry?.community.address || '',
        image: entry?.community.image || '',
        name: entry?.community.name || '',
      },
      engageScore: {
        number: Number(entry?.engageScore.number) || 0,
        unit: entry?.engageScore.unit || '',
      },
    }

    normalizedEngageScoresAndCommunities.push(normalizedEngageScoreAndCommunity)
  }

  // normalize userQuests
  const normalizedUserQuests = []
  for (let i = 0; i < (data?.userQuests || []).length; i++) {
    const entry = data?.userQuests[i]

    const normalizedUserQuest = {
      status: entry?.status || Status.noStatus,
      userSubmission: entry?.userSubmission || '',
      id: entry?.id || 0,
      name: entry?.name || '',
      engagePoints: BigNumber.from(entry?.engagePoints).toNumber() || 0,
      detail: entry?.detail || '',
      groupId: Number(entry?.groupId) || 0,
      condition: {
        type: entry?.condition?.type || QuestType.form,
        conditionDetail: {
          guildId: entry?.condition?.conditionDetail?.guildId || 0,
          roleId: entry?.condition?.conditionDetail?.roleId || 0,
        },
      },
      symbol: entry?.symbol || '',
    }

    normalizedUserQuests.push(normalizedUserQuest)
  }

  return {
    username: data?.username || '',
    description: data?.description || '',
    name: data?.name || '',
    image: data?.image || '',
    discord: normalizedDiscord,
    badges: normalizedBadges,
    communitiesWithBadge: normalizedCommunitiesWithBadge,
    engageScoresAndCommunity: normalizedEngageScoresAndCommunities,
    userQuests: normalizedUserQuests,
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
        setData(data.data.data)
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [])

  return { data: normalizeData(data), isLoading, error }
}

export default useFetchUserDetail
