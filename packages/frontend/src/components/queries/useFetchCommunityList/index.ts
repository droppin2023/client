// PUT THE MAIN HOOK LOGIC HERE

import { useEffect, useState } from 'react'
import axios from 'axios'

import { FetchCommunityListParams, FetchCommunityListResponse } from './useFetchCommunityList.types'
import { GET_COMMUNITY } from './userFetchCommunityList.constants'
import { Category } from '../common'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (
  data: FetchCommunityListResponse | undefined,
): FetchCommunityListResponse => {
  return {
    communityList: data?.communityList || [
      {
        id: 0,
        logo: '',
        name: '',
        category: Category.Other,
        discord: '',
        link: '',
        description: '',
        owner: {
          id: 0,
          address: '',
          image: '',
          name: '',
        },
        totalEngage: { number: 0, unit: '' },
        members: [
          {
            id: 0,
            address: '',
            image: '',
            name: '',
          },
        ],
        totalMember: 0,
      },
    ],
  }
}

// THIS IS OUR QUERY HOOOK
const useFetchCommunityList = ({ query, userId, category, order }: FetchCommunityListParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<FetchCommunityListResponse>(
    normalizeData(undefined) as FetchCommunityListResponse,
  )
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<FetchCommunityListResponse>(`${GET_COMMUNITY}/`, {
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

export default useFetchCommunityList
