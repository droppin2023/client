import badgeContractAbi from '@shared/abis/BadgeFacet.json'
import coreContractAbi from '@shared/abis/CoreFacet.json'
import { useContract, useSigner } from 'wagmi'
import { env } from '@shared/environment'

const useContractConnection = () => {
  const { data: signer } = useSigner()

  const badgeContract = useContract({
    address: '0x7330d3370e3ef493addb2641381cfce60c050ee7',
    abi: badgeContractAbi,
    signerOrProvider: signer,
  })

  const coreContract = useContract({
    address: '0x7330d3370e3ef493addb2641381cfce60c050ee7',
    abi: coreContractAbi,
    signerOrProvider: signer,
  })

  return { signer, coreContract, badgeContract }
}

export default useContractConnection
