import { Chain, allChains, chain, configureChains, createClient } from 'wagmi'

import { env } from './environment'
import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'

/**
 * Wagmi.sh Configuration (https://wagmi.sh/docs)
 */

export const defaultChain: Chain | undefined = allChains.find(
  (chain) => env.defaultChain === chain.id,
)

export const isChainSupported = (chainId?: number): boolean => {
  return chainId && env.supportedChains.includes(chainId)
}
export const supportedChains: Chain[] = allChains.filter((chain) => isChainSupported(chain.id))

export const getRpcUrl = (chainId: number): string => {
  return env.rpcUrls[chainId as keyof typeof env.rpcUrls]
}

const avalancheChain: Chain = {
  id: 5001,
  name: 'Mantle Testnet',
  network: 'mantle_testnet',
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'BIT',
    symbol: 'BIT',
  },
  rpcUrls: {
    default: 'https://rpc.testnet.mantle.xyz',
  },
  blockExplorers: {
    default: { name: 'MantleExplorer', url: 'https://explorer.testnet.mantle.xyz' },
  },
  testnet: true,
}

export const { chains, provider } = configureChains(
  [chain.polygonMumbai, chain.mainnet, avalancheChain, ...supportedChains],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        const rpcUrl = getRpcUrl(chain.id)
        if (!rpcUrl) {
          throw new Error(`No RPC provided for chain ${chain.id}`)
        }
        return { http: rpcUrl }
      },
    }),
    publicProvider(),
  ],
)

const { connectors } = getDefaultWallets({
  appName: 'Droppin',
  chains,
})

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})
