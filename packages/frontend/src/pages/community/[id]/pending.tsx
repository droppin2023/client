import { Button, Flex, HStack, Spinner, VStack } from '@chakra-ui/react'

import DaoPendingRequests from '@components/daoPage/DaoPendingRequests'

import { DaoPageProvider } from '@context/DaoPageContext'

import type { GetServerSideProps } from 'next'
import 'twin.macro'

// TODO: integrate real data
import { ChevronLeftIcon } from '@chakra-ui/icons'
import SectionHeader from '@components/shared/SectionHeader'
import { SERVER_URL } from '@constants/serverConfig'
import { useUserContext } from '@context/UserContext'
import useCheckAdmin from '@queries/useCheckAdmin'
import useFetchCommunityDetail from '@queries/useFetchCommunityDetail'
import axios from 'axios'
import { BigNumber } from 'ethers'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

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

  // const {
  //   data: pendingQuestData,
  //   isLoading: fetchPendingQuestLoading,
  //   error: fetchPendingQuestError,
  // } = useFetchPendingQuestsCommunity({ groupId: communityData.id, members: communityData.members })

  // TODO: make this a query hoook
  const [pendingQuestData, setPendingQuestData] = useState<any>({ pendingQuests: [] })
  const fetchPendingQuestLoading = false

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/pending-quests/${id}`)
      .then((data) => {
        const pendingInfo = data.data

        for (let i = 0; i < pendingInfo.pendingQuests.length; i++) {
          pendingInfo.pendingQuests[i].quest.engageScore = BigNumber.from(
            pendingInfo.pendingQuests[i].quest.engageScore,
          ).toNumber()
        }

        console.log(pendingInfo)

        setPendingQuestData(pendingInfo)
      })
      .catch((err) => console.log('PENDING INFO', err))
  }, [id])

  return (
    <VStack spacing="40px" marginBottom="100px">
      <HStack alignSelf="start" marginLeft={10} marginTop={10}>
        <Button onClick={() => router.back()}>
          <ChevronLeftIcon />
          Back
        </Button>
      </HStack>
      <DaoPageProvider
        isAdmin={isAdmin}
        repUnit={communityData.repUnit}
        setSubmitCount={() => {}}
        id={id}
      >
        {/* TODO: refactor member list, quests, and badges as context */}
        {/* TODO: integrate discord */}
        <SectionHeader title="Pending Quests" subtitle={<></>} />

        <Flex width="80%" minHeight="512px" justifyContent={'center'}>
          {fetchPendingQuestLoading ? (
            <Spinner size="lg" alignSelf={'center'} />
          ) : (
            <DaoPendingRequests requests={pendingQuestData.pendingQuests} />
          )}
        </Flex>
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
