import Image from 'next/image'

import { Button } from '@chakra-ui/react'

import SectionHeader from '@components/home/SectionHeader'

import polygonIdLogo from './assets/polygon-id-logo.svg'
import * as sty from './JoinSection.styles'

const JoinSection = () => {
  return (
    <div css={[sty.background]}>
      <div css={[sty.container]}>
        <div>
          <Image src={polygonIdLogo} alt="Polygon ID Logo" width={256} height={256} />
        </div>
        <div>
          <SectionHeader
            title="Join DAO with most certain way – ZK"
            subtitle="droppin allows you to join DAO based on your zk-identity ( powered by Polygon ID ). Your identity will connect to the different DAOs that you joined."
          />
          <Button margin="24px 0">Get Polygon ID</Button>
        </div>
      </div>
    </div>
  )
}

export default JoinSection
