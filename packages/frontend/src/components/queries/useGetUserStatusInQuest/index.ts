// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { useEffect, useState } from 'react'

import { Status } from '../common'
import { GET_USER_STATUS_IN_QUEST_URL } from './useGetUserStatusInQuest.constants'
import type {
  GetUserStatusQuestParams,
  GetUserStatusQuestResponse,
} from './useGetUserStatusInQuest.types'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: GetUserStatusQuestResponse | undefined) => {
  return {
    status: data?.status || Status.noStatus,
    community: data?.community || {
      id: 0,
      address: '',
      image: '',
      name: '',
    },
    quest: data?.quest || {
      id: 0,
      name: '',
      engageScore: {
        number: 0,
        unit: '',
      },
      description: '',
    },
    userSubmission: data?.userSubmission || '',
    communityMessage: data?.communityMessage || '',
  }
}

// THIS IS OUR QUERY HOOOK
const useGetUserStatusInQuest = ({ questId, username }: GetUserStatusQuestParams) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<GetUserStatusQuestResponse>(
    normalizeData(undefined) as GetUserStatusQuestResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<GetUserStatusQuestResponse>(
        `${GET_USER_STATUS_IN_QUEST_URL}/${questId}/user/${username}`,
        {
          headers: {
            'Content-Type': '*/*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        },
      )
      .then((data) => {
        console.log('BLABLA', data.data)
        setData(data.data)
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [questId, username])

  return { data: normalizeData(data), isLoading, error }
}

export default useGetUserStatusInQuest
