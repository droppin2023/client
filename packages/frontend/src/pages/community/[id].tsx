import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'

import DaoBadgesSection from '@components/daoPage/DaoBadgesSection'
import DaoMembersSection from '@components/daoPage/DaoMembersSection'
import DaoOverview from '@components/daoPage/DaoOverview'
import DaoPendingRequests from '@components/daoPage/DaoPendingRequests'

import { primary } from '@constants/colors'
import { DaoPageProvider } from '@context/DaoPageContext'
import { Categories } from '@types/categories'

import type { GetServerSideProps } from 'next'
import 'twin.macro'

// TODO: integrate real data
import { MOCK_DAO_LIST, MOCK_PENDING_REQUESTS } from '@mockData'
import { QuestCategories } from '@types/quest'

const DaoPage = ({ id }: { id: number }) => {
  const mockDao = MOCK_DAO_LIST[0]

  // TODO: this is a temporary flag, real flag would be calculated with context api and back end data
  const isAdmin = true

  return (
    <VStack spacing="40px" marginBottom="100px">
      <DaoPageProvider isAdmin={isAdmin} repUnit={mockDao.repUnit}>
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
          description={mockDao.description}
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
                <Tab
                  fontWeight={'bold'}
                  _selected={{
                    color: primary,
                    fontWeight: 'bold',
                    borderBottom: `3px solid ${primary}`,
                  }}
                >
                  Pending Quests
                </Tab>
              )}
            </TabList>

            <TabPanels>
              <TabPanel>
                {/* TODO: better type def for badges and Quests*/}
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
                  quests={
                    mockDao.quests as {
                      name: string
                      type: QuestCategories
                      reward: number
                    }[]
                  }
                />
              </TabPanel>
              <TabPanel>
                {/* TODO: better type def for badges and Quests, also integrate real data*/}
                <DaoMembersSection />
              </TabPanel>
              {isAdmin && (
                <TabPanel>
                  <DaoPendingRequests requests={MOCK_PENDING_REQUESTS} />
                </TabPanel>
              )}
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
