import { useState } from 'react'
import axios from 'axios'
import badgeContractAbi from '@shared/abis/BadgeFacet.json'
import type { CreateBadgeParams } from './usePostCreateBadge.types'
import { CREATE_BADGE } from './usePostCreateBadge.constants'
import { useContract, useSigner } from 'wagmi'
import { parseEther } from 'ethers/lib/utils.js'
import { ethers } from 'ethers'

const usePostCreateBadge = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()
  const { data: signer } = useSigner()

  const badgeContract = useContract({
    address: '0xc713834c7aF85099643013620416b673bdC6B526',
    abi: badgeContractAbi,
    signerOrProvider: signer,
  })

  // const badgeData = {
  //   requiredQuests: [1, 4, 2],
  //   engagePointsThreshold: 1000,
  //   badgePrice: parseEther('0.01'),
  //   name: 'Hacker Badge',
  //   NFT: ethers.constants.AddressZero,
  //   groupId: 1,
  //   symbol: 'HACK',
  //   URI: 'www.google.com',
  // }

  const createBadge = async (params: CreateBadgeParams) => {
    setIsLoading(true)
    console.log(params, badgeContract, signer)
    try {
      console.log('hihihi')
      const tsx = await badgeContract?.addBadge(
        { ...params.contract, owner: signer },
        params.contract.symbol,
        params.contract.URI,
      )

      // const tsx = await badgeContract?.addBadge(badgeData, badgeData.symbol, badgeData.URI)
      console.log({ tsx })
      console.log('agegwegwgagewwe')
      const transactionHash = await tsx.wait()
      console.log({ transactionHash })
      const { data, status } = await axios.post(CREATE_BADGE, {
        transactionHash,
        description: params.description,
        name: params.name,
      })
      console.log(data)

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

  return { createBadge, isLoading, error }
}

export default usePostCreateBadge
