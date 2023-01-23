import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import 'twin.macro'

import { primary } from '@constants/colors'

import { UserPageProvider } from '@context/UserPageContext'

import UserOverview from '@components/userPage/UserOverview'

// TODO: integrate real data
import UserBadgesSection from '@components/userPage/UserBadgesSection'
import UserEngagementSection from '@components/userPage/UserEngagementSection'
import { ONE_USER_DETAIL } from '@mockData'

const UserPage = ({ username }: { username: string }) => {
  const userData = ONE_USER_DETAIL

  return (
    <UserPageProvider userData={{ ...userData, username }}>
      <VStack>
        <UserOverview />
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
                Engagements
              </Tab>
              <Tab
                fontWeight={'bold'}
                _selected={{
                  color: primary,
                  fontWeight: 'bold',
                  borderBottom: `3px solid ${primary}`,
                }}
              >
                Quests
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <UserBadgesSection />
              </TabPanel>
              <TabPanel>
                <UserEngagementSection />
              </TabPanel>
              <TabPanel>Quests</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
    </UserPageProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userTag = context.params?.username as string

  return {
    props: {
      username: userTag,
    },
  }
}

export default UserPage
