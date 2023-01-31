import badgeContractAbi from '@shared/abis/BadgeFacet.json'
import coreContractAbi from '@shared/abis/CoreFacet.json'
import { useContract, useSigner } from 'wagmi'
import { env } from '@shared/environment'

const useContractConnection = () => {
  const { data: signer } = useSigner()

  const badgeContract = useContract({
    address: env.droppinDiamond,
    abi: badgeContractAbi,
    signerOrProvider: signer,
  })

  const coreContract = useContract({
    address: env.droppinDiamond,
    abi: coreContractAbi,
    signerOrProvider: signer,
  })

  return { signer, coreContract, badgeContract }
}

export default useContractConnection
