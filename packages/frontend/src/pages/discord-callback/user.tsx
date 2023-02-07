/* eslint-disable no-debugger */
import { Flex, Spinner, Text, VStack } from '@chakra-ui/react'
import { DISCORD_REDIRECT_USER, LS_KEY_DISCORD_USER } from '@constants/discord'
import { DISCORD_ENDPOINT } from '@constants/serverConfig'
import localStorageUtils from '@helpers/localStorageUtils'
import { env } from '@shared/environment'
import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const DiscordAuthRedirect = (props: { id: string; username: string; discriminator: string }) => {
  const router = useRouter()

  useEffect(() => {
    localStorageUtils.write(LS_KEY_DISCORD_USER, props)
    router.replace('/signup')
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
      redirect_uri: DISCORD_REDIRECT_USER,
    }

    const tokenRes = await axios.post(`${DISCORD_ENDPOINT}/oauth2/token`, getTokenBody, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    const { access_token, token_type, expires_in, refresh_token, scope } = tokenRes.data

    const userRes = await axios.get(`${DISCORD_ENDPOINT}/oauth2/@me`, {
      headers: {
        Authorization: `${token_type} ${access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    debugger

    return {
      props: {
        id: userRes.data.user.id,
        username: userRes.data.user.username,
        discriminator: userRes.data.user.discriminator,
      },
    }
  } catch (e) {
    console.error(e)

    return {
      props: {
        id: '',
        username: '',
        discriminator: '',
      },
    }
  }
}

export default DiscordAuthRedirect
