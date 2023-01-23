import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'

import { primary } from '@constants/colors'
import { DaoPageProvider } from '@context/DaoPageContext'

import type { GetServerSideProps } from 'next'
import 'twin.macro'

import { QuestType } from '@components/queries/common'
import { MOCK_BADGE, MOCK_CLAIMED_BADGE } from '@mockData'
import BadgeOverview from '@components/badgePage/BadgeOverview'
import BadgeConditionSection from '@components/badgePage/BadgeConditionSection'
import BadgeClaimedSection from '@components/badgePage/BadgeClaimedSection'

const BadgePage = ({ id }: { id: number }) => {
  // TODO: integrate real data
  const mockBadge = MOCK_BADGE
  const mockClamedBadge = MOCK_CLAIMED_BADGE

  return (
    <VStack spacing="40px" marginBottom="100px">
      {/* TODO: integrate discord */}
      <BadgeOverview
        id={mockBadge.id}
        name={mockBadge.name}
        symbol={mockBadge.symbol}
        logo={mockBadge.logo}
        community={mockBadge.community}
        description={mockBadge.description}
        isDefault={mockBadge.isDefault}
        address={mockBadge.address}
        holderList={mockBadge.holderList}
        requiredQuests={mockBadge.requiredQuests}
        requiredEngageScore={mockBadge.requiredEngageScore}
        requiredPrice={mockBadge.requiredPrice}
      />
      <BadgeConditionSection
        requiredQuests={mockBadge.requiredQuests}
        requiredEngageScore={mockBadge.requiredEngageScore}
        requiredPrice={mockBadge.requiredPrice}
      />
      <BadgeClaimedSection
        address={mockBadge.address}
        claimedBadge={{
          address: mockClamedBadge.contractAddress,
          tokenId: mockClamedBadge.tokenId,
          tokenStandard: mockClamedBadge.tokenStandard,
          chain: mockClamedBadge.chain,
        }}
      />

      {/* <Box width="80%" minHeight="512px">
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
              {isAdmin && (
                <TabPanel>
                  <DaoPendingRequests requests={MOCK_PENDING_REQUESTS} />
                </TabPanel>
              )}
            </TabPanels>
          </Tabs>
        </Box> */}
    </VStack>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const daoID = parseInt(context.params?.id as string)

//   return {
//     props: {
//       id: daoID,
//     },
//   }
// }

export default BadgePage
