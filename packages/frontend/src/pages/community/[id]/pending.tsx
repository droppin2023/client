import { Box, Button, HStack, VStack } from '@chakra-ui/react'

import DaoPendingRequests from '@components/daoPage/DaoPendingRequests'

import { DaoPageProvider } from '@context/DaoPageContext'

import type { GetServerSideProps } from 'next'
import 'twin.macro'

// TODO: integrate real data
import { ChevronLeftIcon } from '@chakra-ui/icons'
import useCheckAdmin from '@components/queries/useCheckAdmin'
import useFetchCommunityDetail from '@components/queries/useFetchCommunityDetail'
import SectionHeader from '@components/shared/SectionHeader'
import { useUserContext } from '@context/UserContext'
import { MOCK_PENDING_REQUESTS } from '@mockData'
import { useRouter } from 'next/router'

const DaoPage = ({ id }: { id: number }) => {
  const { user } = useUserContext()

  const router = useRouter()

  // TODO: this is a temporary flag, real flag would be calculated with context api and back end data

  // const isAdmin = true

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

  return (
    <VStack spacing="40px" marginBottom="100px">
      <HStack alignSelf="start" marginLeft={10} marginTop={10}>
        <Button onClick={() => router.back()}>
          <ChevronLeftIcon />
          Back
        </Button>
      </HStack>
      <DaoPageProvider isAdmin={isAdmin} repUnit={communityData.totalEngage.unit} id={id}>
        {/* TODO: refactor member list, quests, and badges as context */}
        {/* TODO: integrate discord */}
        <SectionHeader title="Pending Quests" subtitle="" />

        <Box width="80%" minHeight="512px">
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
