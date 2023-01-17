import { VStack } from '@chakra-ui/react'

import DaoBadgesSection from '@components/daoPage/DaoBadgesSection'
import DaoOverview from '@components/daoPage/DaoOverview'

import { Categories } from '@types/categories'

import type { GetServerSideProps } from 'next'
import 'twin.macro'

// TODO: integrate real data
import { MOCK_DAO_LIST } from '@mockData'

const DaoPage = ({ id }: { id: number }) => {
  const mockDao = MOCK_DAO_LIST[0]

  return (
    <VStack spacing="120px">
      <DaoOverview
        name={mockDao.name}
        imgUrl={mockDao.img}
        minter={mockDao.minter as string}
        memberCount={mockDao.memberCount}
        memberList={mockDao.members}
        created={mockDao.created as Date}
        earnings={mockDao.earnings || 0}
        chain={mockDao.chain || ''}
        category={mockDao.category as Categories}
        repScore={0}
        repUnit={mockDao.repUnit}
        description={mockDao.description}
      />
      {/* TODO: better type def for badges */}
      <DaoBadgesSection
        badges={
          mockDao.badges as {
            daoName: string
            name: string
            recentActivity: string
            minter: string
            isLocked: false
          }[]
        }
      />
    </VStack>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const daoID = parseInt(context.params?.id as string)

  return {
    props: {
      id: daoID,
    },
  }
}

export default DaoPage
