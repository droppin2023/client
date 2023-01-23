import { VStack } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import 'twin.macro'

import { UserPageProvider } from '@context/UserPageContext'

import UserOverview from '@components/userPage/UserOverview'
import { ONE_USER_DETAIL } from '@mockData'

const UserPage = ({ username }: { username: string }) => {
  const userData = ONE_USER_DETAIL

  return (
    <UserPageProvider userData={{ ...userData, username }}>
      <VStack>
        <UserOverview />
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
