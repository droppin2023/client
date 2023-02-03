import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'

import DaoBadgesSection from '@components/daoPage/DaoBadgesSection'
import DaoMembersSection from '@components/daoPage/DaoMembersSection'
import DaoOverview from '@components/daoPage/DaoOverview'

import { primary } from '@constants/colors'
import { DaoPageProvider } from '@context/DaoPageContext'

import type { GetServerSideProps } from 'next'
import 'twin.macro'

import { QuestType } from '@components/queries/common'
import useCheckAdmin from '@components/queries/useCheckAdmin'
import useFetchCommunityDetail from '@components/queries/useFetchCommunityDetail'
import { useUserContext } from '@context/UserContext'
import { useEffect } from 'react'

const DaoPage = ({ id }: { id: number }) => {
  const { user } = useUserContext()

  const {
    data: communityData,
    isLoading: fetchCommunityDetailLoading,
    error: fetchCommunityDetailError,
  } = useFetchCommunityDetail({ communityId: id })

  const {
    data: { isAdmin },
    isLoading: checkAdminLoading,
    error: checkAdminError,
  } = useCheckAdmin({ communityId: id, username: user?.username as string })

  useEffect(() => {
    console.log('COMMUNITY_DATA', communityData)
  }, [communityData])

  return (
    <VStack spacing="40px" marginBottom="100px">
      <DaoPageProvider isAdmin={isAdmin} repUnit={communityData.totalEngage.unit} id={id}>
        {/* TODO: integrate discord */}
        <DaoOverview
          name={communityData.name}
          imgUrl={communityData.logo}
          memberCount={communityData.totalMember}
          memberList={communityData.members}
          // chain={communityData.blockchain}
          chain="Polygon"
          category={communityData.category}
          repScore={communityData.totalEngage}
          description={communityData.description}
          badges={communityData.badges}
          owner={communityData.owner}
          website={communityData.link}
          discordLink={communityData.discord as string}
          discordGuildId={communityData.discord}
          isLoading={fetchCommunityDetailLoading || checkAdminLoading}
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
            </TabList>

            <TabPanels>
              <TabPanel>
                <DaoBadgesSection
                  badges={communityData.badges}
                  questsDiscord={communityData.quests.filter(
                    (item) => item.condition.type === QuestType.discord,
                  )}
                  questsSubmitForm={communityData.quests.filter(
                    (item) => item.condition.type === QuestType.form,
                  )}
                  isLoading={fetchCommunityDetailLoading}
                />
              </TabPanel>
              <TabPanel>
                <DaoMembersSection members={communityData.members} owner={communityData.owner} />
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
