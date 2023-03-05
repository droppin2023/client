import { serve } from 'https://deno.land/std@0.175.0/http/server.ts'

/**
 * Summon <> Github integration (using webhooks)
 *
 * This is a generic api and can be used for any number of tenants
 * `url.pathname` should be used to provide the `tenantKey`
 */

serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return Response.json({ message: 'Processing only POST requests' })
  }

  const url = new URL(req.url)
  const tenantKey = url.pathname.slice(1)

  const data = await req.json()

  console.log('Webhook event:', { scope: data.event.scope, tenantKey })

  switch (data.event.scope) {
    case 'forum.comment.upvoted':
      {
        const email = data.event.comment.author.googleEmail
        const walletAddress = data.event.comment.author.walletAddress
        const discordUserId = data.event.comment.author.discordId

        await callSummonApi(walletAddress, email, discordUserId, 'comment_upvoted', tenantKey)
      }
      break

    case 'forum.comment.downvoted':
      {
        const email = data.event.comment.author.googleEmail
        const walletAddress = data.event.comment.author.walletAddress
        const discordUserId = data.event.comment.author.discordId

        await callSummonApi(walletAddress, email, discordUserId, 'comment_downvoted', tenantKey)
      }
      break

    case 'forum.comment.created':
      {
        const email = data.event.comment.author.googleEmail
        const walletAddress = data.event.comment.author.walletAddress
        const discordUserId = data.event.comment.author.discordId

        await callSummonApi(walletAddress, email, discordUserId, 'comment_created', tenantKey)
      }
      break

    case 'forum.post.created':
      {
        const email = data.event.post.author.googleEmail
        const walletAddress = data.event.post.author.walletAddress
        const discordUserId = data.event.post.author.discordId

        await callSummonApi(walletAddress, email, discordUserId, 'post_created', tenantKey)
      }
      break

    case 'user.joined':
      {
        const email = data.event.user.googleEmail
        const walletAddress = data.event.user.walletAddress
        const discordUserId = data.event.user.discordId

        await callSummonApi(walletAddress, email, discordUserId, 'user_joined', tenantKey)
      }
      break
  }

  return Response.json({ message: 'OK' })
})

async function callSummonApi(
  walletAddress: string,
  email: string,
  discordUserId: string,
  featureKey: string,
  tenantKey: string,
) {
  const apiToken = Deno.env.get(process.env.NEXT_PUBLIC_SUMMON_API)

  console.log('Sending', {
    featureKey,
    walletAddress,
    email,
    tenantKey,
  })

  return fetch('https://sandbox-api.summon.xyz/v1/xps/job/integration/action', {
    method: 'POST',
    headers: {
      Authentication: `bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      featureKey,
      walletAddress,
      email,
      tenantKey,
    }),
  })
    .then((x) => x.json())
    .then((x) => console.log('Response', featureKey, x))
    .catch((err) => console.warn(err))
}
