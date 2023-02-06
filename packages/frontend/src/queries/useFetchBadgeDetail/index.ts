// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'

import { Quest, QuestType } from '../common'
import type { FetchBadgeDetailParams, FetchBadgeDetailResponse } from './useFetchBadgeDetail.types'
import { GET_BADGE_DETAIL } from './userFetchBadgeDetail.constants'

const normalizeData = (data: FetchBadgeDetailResponse | undefined) => {
  const id = Number(data?.id) || 0
  const address = data?.address || ''
  const description = data?.description || ''
  const engagePointsThreshold = BigNumber.from(data?.engagePointsThreshold || 0).toNumber() || 0
  const badgePrice = BigNumber.from(data?.badgePrice || 0).toNumber() || 0
  const name = data?.name || ''
  const image = data?.image || ''
  const groupId = data?.groupId || ''
  const symbol = data?.symbol || ''

  const normalizedRequiredQuests = []

  for (let i = 0; i < (data?.requiredQuests || []).length; i++) {
    const currentEntry = data?.requiredQuests[i]

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

  return {
    id,
    address,
    description,
    engagePointsThreshold,
    badgePrice,
    name,
    image,
    groupId,
    symbol,
    requiredQuests: normalizedRequiredQuests,
  }
}

// THIS IS OUR QUERY HOOOK
const useFetchBadgeDetail = ({ badgeId }: FetchBadgeDetailParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<FetchBadgeDetailResponse>()
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<FetchBadgeDetailResponse>(`${GET_BADGE_DETAIL}/${badgeId}`, {
        headers: {
          'Content-Type': '*/*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      })
      .then((data) => {
        console.log('BADGE DATA', data.data)
        setData(data.data)
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [badgeId])

  return { data: normalizeData(data), isLoading, error }
}

export default useFetchBadgeDetail
