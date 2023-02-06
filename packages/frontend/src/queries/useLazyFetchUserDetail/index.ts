// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { BigNumber } from 'ethers'
import { useState } from 'react'

import { QuestType, Status } from '../common'
import type { FetchUserDetailParams, FetchUserDetailResponse } from './useLazyFetchUserDetail.types'
import { GET_USER_DETAIL } from './userLazyFetchUserDetail.constants'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: FetchUserDetailResponse | undefined) => {
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
const useLazyFetchUserDetail = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const fetchUserDetail = async ({ username }: FetchUserDetailParams) => {
    setIsLoading(true)

    try {
      const res = await axios.get<{ data: FetchUserDetailResponse }>(
        `${GET_USER_DETAIL}/${username}`,
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
        return normalizeData(res.data.data)
      }

      throw 'Fetch User Detail Failed'
    } catch (e: any) {
      setError(e.response.data.msg)
    }
  }

  return { fetchUserDetail, isLoading, error }
}

export default useLazyFetchUserDetail
