// PUT THE MAIN HOOK LOGIC HERE

import { useEffect, useState } from 'react'
import axios from 'axios'

import type {
  FetchPendingQuestsParams,
  FetchPendingQuestsResponse,
} from './useFetchPendingQuests.types'
import { GET_COMMUNITY } from './userFetchPendingQuests.constants'
import { stringify } from 'querystring'
import { QuestType, Status } from '../common'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (
  data: FetchPendingQuestsResponse | undefined,
): FetchPendingQuestsResponse => {
  return {
    pendingQuests: [
      {
        quest: {
          id: data?.pendingQuests[0].quest.id || 0,
          name: data?.pendingQuests[0].quest.name || '',
          condition: data?.pendingQuests[0].quest.condition || {
            type: QuestType.form,
            conditionDetail: data?.pendingQuests[0].quest.condition.conditionDetail || {
              guildId: 0,
              roleId: 0,
            },
          },
          engageScore: data?.pendingQuests[0].quest.engageScore || { number: 0, unit: '' },
          schemaHash: data?.pendingQuests[0].quest.schemaHash || '',
          description: data?.pendingQuests[0].quest.description || '',
          status: Status.pending,
        },
        requestUser: {
          id: data?.pendingQuests[0].requestUser.id || 0,
          address: data?.pendingQuests[0].requestUser.address || '',
          image: data?.pendingQuests[0].requestUser.image || '',
          name: data?.pendingQuests[0].requestUser.name || '',
        },
        requestAnswer: data?.pendingQuests[0].requestAnswer || '',
      },
    ],
  }
}

// THIS IS OUR QUERY HOOOK
const useFetchQuestDetail = ({ groupId, adminId }: FetchPendingQuestsParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<FetchPendingQuestsResponse>(
    normalizeData(undefined) as FetchPendingQuestsResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<FetchPendingQuestsResponse>(`${GET_COMMUNITY}/?groupId=${groupId}&adminId=${adminId}`, {
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

export default useFetchQuestDetail
