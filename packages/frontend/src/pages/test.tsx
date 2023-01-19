import { useContract } from 'wagmi'
import badgeContractAbi from '../config/abis/BadgeFacet.json'

import type { NextPage } from 'next'
import 'twin.macro'

const TestContractPage: NextPage = () => {
  const badgeContract = useContract({
    address: '0x1c8aBb04C8Ab9a105ee2c44b13398E98fC12E6d4',
    abi: badgeContractAbi,
  })
  console.log(badgeContract)
  return <div></div>
}

export default TestContractPage
