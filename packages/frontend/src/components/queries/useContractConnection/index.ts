import { useContract, useSigner } from 'wagmi'
import badgeContractAbi from '@shared/abis/BadgeFacet.json'
import coreContractAbi from '@shared/abis/CoreFacet.json'

const useContractConnection = () => {
  const { data: signer } = useSigner()

  const badgeContract = useContract({
    address: '0x39eF787427B3743Ee9932aE3b6647807dd044fD8',
    abi: badgeContractAbi,
    signerOrProvider: signer,
  })

  const coreContract = useContract({
    address: '0x39eF787427B3743Ee9932aE3b6647807dd044fD8',
    abi: coreContractAbi,
    signerOrProvider: signer,
  })

  return { signer, coreContract, badgeContract }
}

export default useContractConnection
