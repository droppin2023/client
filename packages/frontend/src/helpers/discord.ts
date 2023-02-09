import { env } from '@shared/environment'

export const generateAuthUrl = (redirectUrl: string, state?: any) => {
  const query = []

  query.push(
    encodeURIComponent('client_id') + '=' + encodeURIComponent(env.discordClientId as string),
  )
  query.push(encodeURIComponent('redirect_uri') + '=' + encodeURIComponent(redirectUrl))
  query.push(encodeURIComponent('response_type') + '=' + encodeURIComponent('code'))
  query.push(encodeURIComponent('scope') + '=identify%20guilds.members.read%20guilds')

  if (state)
    query.push(
      encodeURIComponent('state') + '=' + Buffer.from(JSON.stringify(state)).toString('base64'),
    )

  console.log(
    'AUTH_URL',
    'https://discord.com/api/oauth2/authorize' + (query.length ? '?' + query.join('&') : ''),
  )

  return 'https://discord.com/api/oauth2/authorize' + (query.length ? '?' + query.join('&') : '')
}
