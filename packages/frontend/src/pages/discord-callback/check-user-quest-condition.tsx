/* eslint-disable no-debugger */
import { Flex, Spinner, Text, VStack } from '@chakra-ui/react'
import { LS_QUEST_CARD_LOCATION } from '@components/shared/QuestCard/QuestCard.constants'
import { DISCORD_REDIRECT_CHECK_USER_QUEST_CONDITION } from '@constants/discord'
import { DISCORD_ENDPOINT } from '@constants/serverConfig'
import localStorageUtils from '@helpers/localStorageUtils'
import { env } from '@shared/environment'
import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const DiscordCheckUserQuestCondition = (props: {
  isMemberChecked: boolean
  isRoleChecked: boolean
  questId: number
  errorMsg: string
}) => {
  const router = useRouter()

  useEffect(() => {
    // write all the props in
    // localStorageUtils.write(LS_KEY_DISCORD_CHECK_QUEST_DATA, props)

    // clear community id
    const destination = localStorageUtils.read(LS_QUEST_CARD_LOCATION)

    const formattedDestination = destination.split('?')
    console.log(formattedDestination)

    router.replace(
      `${formattedDestination[0]}?discordCheck=${Buffer.from(JSON.stringify(props)).toString(
        'base64',
      )}`,
    )
  }, [props])

  return (
    <Flex width="100%" height="100%" justifyContent={'center'} alignItems="center">
      <VStack spacing={5}>
        <Spinner size="lg" />
        <Text>Fetching Discord Data...</Text>
      </VStack>
    </Flex>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const code = context.query.code
  const state = JSON.parse(Buffer.from(context.query.state as string, 'base64').toString())
  const { guildId, roleId, questId } = state

  console.log('ROLE ID', roleId, typeof roleId)

  try {
    const getTokenBody = {
      client_id: env.discordClientId,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: DISCORD_REDIRECT_CHECK_USER_QUEST_CONDITION,
    }

    const tokenRes = await axios.post(`${DISCORD_ENDPOINT}/oauth2/token`, getTokenBody, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    const { access_token, token_type, expires_in, refresh_token, scope } = tokenRes.data

    const memberResponse = await axios.get(
      `${DISCORD_ENDPOINT}/users/@me/guilds/${guildId}/member`,
      {
        headers: {
          Authorization: `${token_type} ${access_token}`,
          'Content-Type': 'application/json',
        },
      },
    )

    const memberData = memberResponse.data
    const isMemberChecked = true

    // check role
    let isRoleChecked = memberData.roles.filter((item: any) => item === roleId).length >= 1
    if (roleId === 0) isRoleChecked = true

    return {
      props: {
        questId,
        isMemberChecked,
        isRoleChecked,
        errorMsg: !isRoleChecked ? 'You do not have the required role !' : '',
      },
    }
  } catch (e: any) {
    const errorData = e.response.data
    console.error('ERROR', errorData)

    if (errorData.code === 10004) {
      return {
        props: {
          questId,
          isMemberChecked: false,
          isRoleChecked: false,
          errorMsg: 'You are not a member of the guild yet !',
        },
      }
    }

    return {
      props: {
        questId,
        isMemberChecked: false,
        isRoleChecked: false,
        errorMsg: 'Unknown error',
      },
    }
  }
}

export default DiscordCheckUserQuestCondition
