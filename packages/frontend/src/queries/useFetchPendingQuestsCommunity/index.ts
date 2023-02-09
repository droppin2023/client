// PUT THE MAIN HOOK LOGIC HERE

import { SERVER_URL } from '@constants/serverConfig'
import axios, { AxiosResponse } from 'axios'
import { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'

import type {
  FetchPendingQuestsCommunityParams,
  FetchPendingQuestsCommunityResponse,
} from './useFetchPendingQuestsCommunity.types'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: FetchPendingQuestsCommunityResponse | undefined) => {
  const normalizedPendingQuests = []

  for (let i = 0; i < (data?.pendingQuests?.length || 0); i++) {
    const normalizedEntry = { quest: {}, requestUser: {}, requestAnswer: '' }

    normalizedEntry['quest'] = data?.pendingQuests?.[i].quest || {
      id: 0,
      name: '',
      engageScore: 0,
      description: '',
    }

    if (data?.pendingQuests?.[i].quest.engagePoints)
      (normalizedEntry.quest as any).engageScore = BigNumber.from(
        data?.pendingQuests?.[i].quest.engagePoints,
      ).toNumber()

    normalizedEntry['requestUser'] = data?.pendingQuests?.[i].requestUser || {
      username: '',
      address: '',
      image: '',
      name: '',
    }

    normalizedEntry['requestAnswer'] = data?.pendingQuests?.[i].requestAnswer || ''

    normalizedPendingQuests.push(normalizedEntry)
  }

  return {
    pendingQuests: normalizedPendingQuests,
  }
}

/**
 * This query hooks needs a "members" parameter that is obtained from fetchCommunityDetail
 * @date 2/1/2023 - 3:46:59 PM
 *
 * @param {FetchPendingQuestsCommunityParams} { groupId, members }
 * @returns {{ data: { pendingQuests: {}; }; isLoading: any; error: any; }}
 */
const useFetchPendingQuests = ({ groupId, members }: FetchPendingQuestsCommunityParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<FetchPendingQuestsCommunityResponse>(
    normalizeData(undefined) as FetchPendingQuestsCommunityResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    const memberFetchPromise: Promise<AxiosResponse<FetchPendingQuestsCommunityResponse>>[] = []

    // loop through this, fetch all the pending quests
    for (const member of members) {
      memberFetchPromise.push(
        axios.get<FetchPendingQuestsCommunityResponse>(
          `${SERVER_URL}/community/${groupId}/pending/${member.username}`,
          {
            headers: {
              'Content-Type': '*/*',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
          },
        ),
      )
    }

    Promise.all(memberFetchPromise)
      .then((values) => {
        const newData = []
        for (const data of values) {
          newData.push(...data.data.pendingQuests)
        }

        console.log('PENDING QUESTS', newData)

        setData({
          pendingQuests: newData,
        })
      })
      .catch((err) => setError(error))
      .finally(() => setIsLoading(false))
  }, [groupId, members])

  return { data: normalizeData(data), isLoading, error }
}

export default useFetchPendingQuests
