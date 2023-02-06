// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { useEffect, useState } from 'react'

import { QuestType } from '../common'
import type { FetchQuestDetailParams, FetchQuestDetailResponse } from './useFetchBadgeDetail.types'
import { GET_COMMUNITY } from './userFetchBadgeDetail.constants'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: FetchQuestDetailResponse | undefined) => {
  return {
    quest: data?.quest || {
      id: 0,
      name: '',
      engageScore: {
        number: 0,
        unit: '',
      },
      description: '',
    },
    condition: data?.condition || {
      type: QuestType.form,
      conditionDetail: data?.condition?.conditionDetail || { guildId: 0, roleId: 0 },
    },
  }
}

// THIS IS OUR QUERY HOOOK
const useFetchQuestDetail = ({ questId }: FetchQuestDetailParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<FetchQuestDetailResponse>(
    normalizeData(undefined) as FetchQuestDetailResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<FetchQuestDetailResponse>(`${GET_COMMUNITY}/${questId}`, {
        headers: {
          'Content-Type': '*/*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      })
      .then((data) => {
        console.log('QUEST_DETAIL', data)
        setData(data.data)
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [questId])

  return { data: normalizeData(data), isLoading, error }
}

export default useFetchQuestDetail
