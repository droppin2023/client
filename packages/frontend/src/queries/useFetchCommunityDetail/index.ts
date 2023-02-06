// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { useEffect, useState } from 'react'

import { Quest, QuestType, User } from '@queries/common'
import { BigNumber, ethers } from 'ethers'
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
    const entry = data?.quests[i]

    const normalizedQuest: Quest = {
      id: entry?.id || 0,
      name: entry?.name || '',
      engagePoints: ethers.BigNumber.from(entry?.engagePoints).toNumber() || 0,
      detail: entry?.detail || '',
      groupId: entry?.groupId || 0,
      condition: {
        type: entry?.condition?.type || QuestType.form,
        conditionDetail: {
          guildId: entry?.condition.conditionDetail?.guildId || 0,
          roleId: entry?.condition.conditionDetail?.guildId || 0,
        },
      },
      symbol: entry?.symbol || '',
    }

    normalizedQuests.push(normalizedQuest)
  }

  // normalize members
  const normalizedMembers = []
  for (let i = 0; i < (data?.members || []).length; i++) {
    const entry = data?.members[i]

    const normalizedMember: User = {
      username: entry?.username || '',
      address: entry?.address || '',
      image: entry?.image || '',
      name: entry?.name || '',
    }

    normalizedMembers.push(normalizedMember)
  }

  // normalize badges
  const normalizedBadges = []
  for (let i = 0; i < (data?.badges || []).length; i++) {
    const entry = data?.badges[i]

    const normalizedRequiredQuests = []

    for (let i = 0; i < (entry?.requiredQuests || []).length; i++) {
      const currentEntry = entry?.requiredQuests[i]

      const normalizedRequiredQuest: Quest = {
        id: Number(currentEntry?.id) || 0,
        condition: {
          type: currentEntry?.condition?.type || QuestType.form,
          conditionDetail: {
            guildId: currentEntry?.condition?.conditionDetail?.guildId || 0,
            roleId: currentEntry?.condition?.conditionDetail?.roleId || 0,
          },
        },
        engagePoints: BigNumber.from(currentEntry?.engagePoints || 0).toNumber(),
        groupId: currentEntry?.groupId || 0,
        name: currentEntry?.name || '',
        detail: currentEntry?.detail || '',
        symbol: currentEntry?.symbol || '',
      }

      normalizedRequiredQuests.push(normalizedRequiredQuest)
    }

    const normalizedBadge = {
      id: entry?.id || 0,
      image: entry?.image || '',
      name: entry?.name || '',
      description: entry?.description || '',
      groupId: entry?.groupId || 0,
      address: entry?.address || '',
      badgePrice: entry?.badgePrice || 0,
      requiredQuests: normalizedRequiredQuests,
    }

    normalizedBadges.push(normalizedBadge)
  }

  // normalize default badge
  const normalizedRequiredDefaultQuests = []
  for (let i = 0; i < (data?.defaultBadge?.requiredQuests || []).length; i++) {
    const currentEntry = data?.defaultBadge?.requiredQuests[i]

    const normalizedRequiredQuest: Quest = {
      id: Number(currentEntry?.id) || 0,
      condition: {
        type: currentEntry?.condition?.type || QuestType.form,
        conditionDetail: {
          guildId: currentEntry?.condition?.conditionDetail?.guildId || 0,
          roleId: currentEntry?.condition?.conditionDetail?.roleId || 0,
        },
      },
      engagePoints: BigNumber.from(currentEntry?.engagePoints || 0).toNumber(),
      groupId: currentEntry?.groupId || 0,
      name: currentEntry?.name || '',
      detail: currentEntry?.detail || '',
      symbol: currentEntry?.symbol || '',
    }

    normalizedRequiredDefaultQuests.push(normalizedRequiredQuest)
  }

  const normalizedDefaultBadge = {
    id: data?.defaultBadge?.id || 0,
    image: data?.defaultBadge?.image || '',
    name: data?.defaultBadge?.name || '',
    description: data?.defaultBadge?.description || '',
    groupId: data?.defaultBadge?.groupId || 0,
    address: data?.defaultBadge?.address || '',
    badgePrice: data?.defaultBadge?.badgePrice || 0,
    requiredQuests: normalizedRequiredDefaultQuests,
  }

  const normalizedOwner = {
    username: data?.owner?.username || '',
    address: data?.owner?.address || '',
    image: data?.owner?.image || '',
    name: data?.owner?.name || '',
  }

  const normalizedTotalEngage = {
    number: data?.totalEngage?.number || 0,
    unit: data?.totalEngage?.unit || '',
  }

  return {
    id: data?.id || 0,
    logo: data?.logo || '',
    name: data?.name || '',
    category: data?.category || Category.Other,
    description: data?.description || '',
    owner: normalizedOwner,
    totalEngage: normalizedTotalEngage,
    members: normalizedMembers,
    badges: normalizedBadges,
    quests: normalizedQuests,
    defaultBadge: normalizedDefaultBadge,
    repUnit: data?.repUnit || '',
    link: data?.link || '',
    discord: data?.discord || '',
  }
}

// THIS IS OUR QUERY HOOOK
const useFetchCommunityDetail = ({ communityId }: FetchCommunityDetailParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<FetchCommunityDetailResponse>()
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
        console.log('COMMUNITY DATA RAW', data.data.data)
        setData(data.data.data)
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [communityId])

  return { data: normalizeData(data), isLoading, error }
}

export default useFetchCommunityDetail
