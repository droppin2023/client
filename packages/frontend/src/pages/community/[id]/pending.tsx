import {
  Box,
  Button,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react'

import DaoBadgesSection from '@components/daoPage/DaoBadgesSection'
import DaoMembersSection from '@components/daoPage/DaoMembersSection'
import DaoOverview from '@components/daoPage/DaoOverview'
import DaoPendingRequests from '@components/daoPage/DaoPendingRequests'

import { primary } from '@constants/colors'
import { DaoPageProvider } from '@context/DaoPageContext'

import type { GetServerSideProps } from 'next'
import 'twin.macro'

// TODO: integrate real data
import { QuestType } from '@components/queries/common'
import { MOCK_PENDING_REQUESTS, ONE_COMMUNITY } from '@mockData'
import { useRouter } from 'next/router'

const DaoPage = ({ id }: { id: number }) => {
  const mockDao = ONE_COMMUNITY
  const router = useRouter()

  // TODO: this is a temporary flag, real flag would be calculated with context api and back end data
  const isAdmin = true

  return (
    <VStack spacing="40px" marginBottom="100px">
      <HStack alignSelf="start" marginLeft={10} marginTop={10}>
        <Button onClick={() => router.back()}>back</Button>
      </HStack>
      <DaoPageProvider isAdmin={isAdmin} repUnit={mockDao.totalEngage.unit} id={id}>
        {/* TODO: refactor member list, quests, and badges as context */}
        {/* TODO: integrate discord */}

        <Box width="80%" minHeight="512px">
          <Tabs>
            <Tab
              fontWeight={'bold'}
              _selected={{
                color: primary,
                fontWeight: 'bold',
                borderBottom: `3px solid ${primary}`,
              }}
            >
              Pending Quests
            </Tab>{' '}
          </Tabs>

          <DaoPendingRequests requests={MOCK_PENDING_REQUESTS} />
        </Box>
      </DaoPageProvider>
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
