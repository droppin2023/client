// PUT THE MAIN HOOK LOGIC HERE

import { useEffect, useState } from 'react'
import axios from 'axios'

import type {
  GetUserStatusQuestParams,
  GetUserStatusQuestResponse,
} from './useGetUserStatusInQuest.types'
import { GET_COMMUNITY } from './useGetUserStatusInQuestconstants'
import { Status } from '../common'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (
  data: GetUserStatusQuestResponse | undefined,
): GetUserStatusQuestResponse => {
  return {
    status: data?.status || Status.rejected,
    community: data?.community || {
      id: 0,
      address: '',
      image: '',
      name: '',
    },
    userSubmission: data?.userSubmission || '',
    communityMessage: data?.communityMessage || '',
  }
}

// THIS IS OUR QUERY HOOOK
const useGetUserStatusInQuest = ({ communityId, questId, username }: GetUserStatusQuestParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<GetUserStatusQuestResponse>(
    normalizeData(undefined) as GetUserStatusQuestResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<GetUserStatusQuestResponse>(
        `${GET_COMMUNITY}/?communityId=${communityId}&questId=${questId}&username=${username}`,
        {
          headers: {
            'Content-Type': '*/*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        },
      )
      .then((data) => {
        setData(data.data)
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [])

  return { data: normalizeData(data), isLoading, error }
}

export default useGetUserStatusInQuest
