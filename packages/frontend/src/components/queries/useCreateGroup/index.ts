import { useState } from 'react'
import axios from 'axios'
import coreContractAbi from '@shared/abis/CoreFacet.json'
import type { CreateGroupParams } from './useCreateBadge.types'
import { CREATE_GROUP } from './useCreateBadge.constants'
import { useContract, useSigner } from 'wagmi'

const useCreateGroup = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { data: signer } = useSigner()

  const coreContract = useContract({
    address: '0x1c8aBb04C8Ab9a105ee2c44b13398E98fC12E6d4',
    abi: coreContractAbi,
    signerOrProvider: signer,
  })

  const createGroup = async (params: CreateGroupParams) => {
    setIsLoading(true)

    try {
      const tsx = await coreContract?.createGroup(params.name)
      const transactionHash = await tsx.wait()
      console.log({ transactionHash })
      const { data, status } = await axios.post(CREATE_GROUP, {
        transactionHash,
        link: params.link,
        logo: params.logo,
        name: params.name,
        description: params.description,
        category: params.category,
        discord: params.discord,
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

  return { createGroup, isLoading, error }
}

export default useCreateGroup
