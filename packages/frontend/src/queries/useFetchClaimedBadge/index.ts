// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { useEffect, useState } from 'react'

import type {
  FetchClaimedBadgeParams,
  FetchClaimedBadgeResponse,
} from './useFetchClaimedBadge.types'
import useContractConnection from '../useContractConnection'

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: FetchClaimedBadgeResponse | undefined) => {
  return {
    // isClaimed: data?.isClaimed || false,
    address: data?.address || '',
    tokenId: data?.tokenId || 0,
    tokenStandard: data?.tokenStandard || '',
    chain: data?.chain || '',
  }
}

// NOTE: need some tutorial on This part, I read it fetches from the SC
const useFetchClaimedBadge = ({ badgeId }: FetchClaimedBadgeParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { badgeContract } = useContractConnection()
  const [data, setData] = useState<FetchClaimedBadgeResponse>(
    normalizeData(undefined) as FetchClaimedBadgeResponse,
  )

  const fetchClaimedBadge = async (params: FetchClaimedBadgeParams) => {
    setIsLoading(true)
    // console.log(params, badgeContract)
    try {
      const tsx = await badgeContract?.claimBadge(params.badgeId)
      const transactionHash = await tsx.wait()
      console.log({ transactionHash })
      return transactionHash
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { fetchClaimedBadge, isLoading, error }
}

export default useFetchClaimedBadge
