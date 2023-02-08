/* eslint-disable @typescript-eslint/no-non-null-assertion */

/**
 * Environment Variables defined in `.env.local`.
 * See `env.local.example` for documentation.
 */
export const env = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzU5MzA3NjEsImp0aSI6IjY0ZTA4NjJlLTE1YTktNGNjMi05NWEyLTA5NDk5MTAxOWMwMyIsImlhdCI6MTY3NTg0NDM2MSwibmJmIjoxNjc1ODQ0MzYxLCJzdWIiOiI0NTZiMjNiNC1kMzFlLTRiZGEtODk5NC05N2E4MGY2ZWQ3ZDkiLCJzY29wZSI6ImFwaSIsImFjY291bnQiOnsidmVyaWZpZWQiOnRydWUsIm9yZ2FuaXphdGlvbiI6IjdiODBlMTNiLTM1NTAtNDUzOC1hZGIzLWYzNDE4M2IwYzJiMCIsInJvbGUiOiJPV05FUiIsImVtYWlsIjoiZHJvcHBpbkBnbWFpbC5jb20ifX0.PD_8aHyvw_g-6Dv5nwW76_Q2EN7WUNQfmjq2qlrIK7M',
  issuerId: '7b80e13b-3550-4538-adb3-f34183b0c2b0',
  schemaId: '713d3a7d-60a2-414b-893f-6d8c2e05bfe1',
  offerId: '0188b6be-0730-4cdd-be95-cf58cf21e2e5',

  url:
    process.env.NEXT_PUBLIC_VERCEL_URL && process.env.NEXT_PUBLIC_VERCEL_ENV! === 'preview'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : process.env.NEXT_PUBLIC_URL,
  isProduction: process.env.NEXT_PUBLIC_PRODUCTION_MODE === 'true',

  defaultChain: parseInt(process.env.NEXT_PUBLIC_DEFAULT_CHAIN!),
  droppinDiamond: process.env.NEXT_PUBLIC_DEPLOYED_DROPPIN_DIAMOND_ADDR,
  supportedChains: JSON.parse(process.env.NEXT_PUBLIC_SUPPORTED_CHAINS!),

  discordAuthUrl: process.env.NEXT_PUBLIC_DISCORD_AUTH_URL,
  discordClientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,

  rpcUrls: {
    1337: process.env.NEXT_PUBLIC_RPC_1337!, // Hardhat

    1: process.env.NEXT_PUBLIC_RPC_1!, // Ethereum Mainnet
    5: process.env.NEXT_PUBLIC_RPC_5!, // Goerli

    137: process.env.NEXT_PUBLIC_RPC_137!, // Polygon Mainnet
    80001: process.env.NEXT_PUBLIC_RPC_80001!, // Mumbai
  },
}
