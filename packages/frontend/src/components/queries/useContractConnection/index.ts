import { useContract, useSigner } from 'wagmi'
import badgeContractAbi from '@shared/abis/BadgeFacet.json'
import coreContractAbi from '@shared/abis/CoreFacet.json'

const useContractConnection = () => {
  const { data: signer } = useSigner()

  const badgeContract = useContract({
    address: '0x26dA0c03fC70906836530b5a8fe56617665F3a59',
    abi: badgeContractAbi,
    signerOrProvider: signer,
  })

  const coreContract = useContract({
    address: '0x26dA0c03fC70906836530b5a8fe56617665F3a59',
    abi: coreContractAbi,
    signerOrProvider: signer,
  })

  return { signer, coreContract, badgeContract }
}

export default useContractConnection
