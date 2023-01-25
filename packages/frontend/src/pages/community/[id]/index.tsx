import { Box, Button, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'

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
import Link from 'next/link'

const DaoPage = ({ id }: { id: number }) => {
  const mockDao = ONE_COMMUNITY

  // TODO: this is a temporary flag, real flag would be calculated with context api and back end data
  const isAdmin = true

  return (
    <VStack spacing="40px" marginBottom="100px">
      <DaoPageProvider isAdmin={isAdmin} repUnit={mockDao.totalEngage.unit} id={id}>
        {/* TODO: refactor member list, quests, and badges as context */}
        {/* TODO: integrate discord */}
        <DaoOverview
          name={mockDao.name}
          imgUrl={mockDao.logo}
          memberCount={mockDao.totalMember}
          memberList={mockDao.members}
          chain={mockDao.blockchain}
          category={mockDao.category}
          repScore={mockDao.totalEngage.number}
          description={mockDao.description}
          badges={mockDao.badges}
          owner={mockDao.owner}
          website={mockDao.link}
        />

        <Box width="80%" minHeight="512px">
          <Tabs isLazy align="center" variant="unstyled">
            <TabList>
              <Tab
                fontWeight={'bold'}
                _selected={{
                  color: primary,
                  fontWeight: 'bold',
                  borderBottom: `3px solid ${primary}`,
                }}
              >
                Badges
              </Tab>
              <Tab
                fontWeight={'bold'}
                _selected={{
                  color: primary,
                  fontWeight: 'bold',
                  borderBottom: `3px solid ${primary}`,
                }}
              >
                Members
              </Tab>
              {isAdmin && (
                <Button fontWeight={'bold'}>
                  <Link href={`/community/${id}/pending`}>Pending Quests</Link>
                </Button>
              )}
            </TabList>

            <TabPanels>
              <TabPanel>
                <DaoBadgesSection
                  badges={mockDao.badges}
                  questsDiscord={
                    mockDao.quests.filter((item) => item.questType === QuestType.discord)[0]
                  }
                  questsSubmitForm={
                    mockDao.quests.filter((item) => item.questType === QuestType.form)[0]
                  }
                />
              </TabPanel>
              <TabPanel>
                <DaoMembersSection members={mockDao.members} />
              </TabPanel>
              {/* {isAdmin && (
                <TabPanel>
                  <DaoPendingRequests requests={MOCK_PENDING_REQUESTS} />
                </TabPanel>
              )} */}
            </TabPanels>
          </Tabs>
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
