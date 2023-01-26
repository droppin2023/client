// PUT THE MAIN HOOK LOGIC HERE

import { useEffect, useState } from 'react'
import axios from 'axios'

import type {
  FetchClaimedBadgeParams,
  FetchClaimedBadgeResponse,
} from './useFetchClaimedBadge.types'
import { GET_COMMUNITY } from './userFetchClaimedBadge.constants'
import { stringify } from 'querystring'
import { QuestType, Status } from '../common'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: FetchClaimedBadgeResponse | undefined): FetchClaimedBadgeResponse => {
  return {
    isClaimed: data?.isClaimed || false,
    address: data?.address || '',
    tokenId: data?.tokenId || 0,
    tokenStandard: data?.tokenStandard || '',
    chain: data?.chain || '',
  }
}

// THIS IS OUR QUERY HOOOK
const useFetchBadgeDetail = ({ badgeId, username }: FetchClaimedBadgeParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<FetchClaimedBadgeResponse>(
    normalizeData(undefined) as FetchClaimedBadgeResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<FetchClaimedBadgeResponse>(`${GET_COMMUNITY}/?badgeId=${badgeId}&username=${username}`, {
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

export default useFetchBadgeDetail
