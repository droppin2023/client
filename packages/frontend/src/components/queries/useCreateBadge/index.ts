import { useState } from 'react'
import axios from 'axios'
import badgeContractAbi from '@shared/abis/BadgeFacet.json'
import type { CreateBadgeParams } from './useCreateBadge.types'
import { CREATE_BADGE } from './useCreateBadge.constants'
import { useContract, useSigner } from 'wagmi'

const useCreateBadge = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { data: signer } = useSigner()

  const badgeContract = useContract({
    address: '0x1c8aBb04C8Ab9a105ee2c44b13398E98fC12E6d4',
    abi: badgeContractAbi,
    signerOrProvider: signer,
  })

  const postForm = async (params: CreateBadgeParams) => {
    setIsLoading(true)

    try {
      const tsx = await badgeContract?.addBadge(
        params.contract,
        params.contract.symbol,
        params.contract.URI,
      )
      const transactionHash = await tsx.wait()
      console.log({ transactionHash })
      const { data, status } = await axios.post(CREATE_BADGE, {
        transactionHash,
        description: params.description,
        name: params.name,
      })

      if (status === 200) {
        setIsLoading(false)
        return data.data
      }

      throw new Error('Form Post Error!')
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { postForm, isLoading, error }
}

export default useCreateBadge
