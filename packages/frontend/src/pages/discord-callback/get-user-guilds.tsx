/* eslint-disable no-debugger */
import { Flex, Spinner, Text, VStack } from '@chakra-ui/react'
import { LS_CURRENT_COMMUNITY } from '@constants/common'
import {
  DISCORD_REDIRECT_GET_USER_GUILDS,
  LS_KEY_DISCORD_USER_GUILDS,
  LS_KEY_IS_CONNECT_DISCORD_OPEN,
} from '@constants/discord'
import { DISCORD_ENDPOINT } from '@constants/serverConfig'
import localStorageUtils from '@helpers/localStorageUtils'
import { env } from '@shared/environment'
import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const DiscordGetUserGuildsRedirect = (props: { guilds: any[] }) => {
  const router = useRouter()

  useEffect(() => {
    // write all the props in
    localStorageUtils.write(LS_KEY_DISCORD_USER_GUILDS, props)
    localStorageUtils.write(LS_KEY_IS_CONNECT_DISCORD_OPEN, { isOpen: true })

    // clear community id
    const communityId = localStorageUtils.read(LS_CURRENT_COMMUNITY)
    localStorageUtils.write(LS_CURRENT_COMMUNITY, {})

    router.replace(`/community/${communityId.id}`)
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

  try {
    const getTokenBody = {
      client_id: env.discordClientId,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: DISCORD_REDIRECT_GET_USER_GUILDS,
    }

    const tokenRes = await axios.post(`${DISCORD_ENDPOINT}/oauth2/token`, getTokenBody, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    const { access_token, token_type, expires_in, refresh_token, scope } = tokenRes.data

    const guildRes = await axios.get(`${DISCORD_ENDPOINT}/users/@me/guilds`, {
      headers: {
        Authorization: `${token_type} ${access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    // const guildInvitesPromises = []
    // for (let i = 0; i < guildRes.data.length; i++) {
    //   guildInvitesPromises.push(
    //     axios.get(`${DISCORD_ENDPOINT}/guilds/${guildRes.data[i].id}/invites`, {
    //       headers: {
    //         Authorization: `${token_type} ${access_token}`,
    //         'Content-Type': 'application/json',
    //       },
    //     }),
    //   )
    // }

    // const guildInvites = await Promise.allSettled(guildInvitesPromises)

    // console.log(
    //   'INVITES',
    //   guildInvites.filter((item) => item.status === 'fulfilled'),
    // )

    return {
      props: {
        guilds: guildRes.data,
      },
    }
  } catch (e) {
    console.error(e)

    return {
      props: {
        guilds: [],
      },
    }
  }
}

export default DiscordGetUserGuildsRedirect
