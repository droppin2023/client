import Image from 'next/image'

import { ConnectButton } from '@rainbow-me/rainbowkit'

import { Button } from '@chakra-ui/react'

import { danger, dangerHighlight, orange, orangeHighlight } from '@constants/colors'

import ProfileDropdown from './components/ProfileDropdown'

const DroppinConnectButton = () => {
  const handleClickProfile = (openAccountModal: () => void) => {
    // openAccountModal()
  }

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    variant="filled"
                    bgColor={orange}
                    _hover={{ bg: orangeHighlight }}
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </Button>
                )
              }

              if (chain.unsupported) {
                return (
                  <Button
                    variant="filled"
                    bgColor={danger}
                    _hover={{ bg: dangerHighlight }}
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </Button>
                )
              }

              return (
                <div style={{ display: 'flex', gap: '24px' }}>
                  <Button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            width={12}
                            height={12}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </Button>

                  <ProfileDropdown
                    openAccountModal={openAccountModal}
                    walletAddress={account.displayName}
                  >
                    <Image src={account.ensAvatar as string} alt="Wallet avatar" />
                  </ProfileDropdown>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}

export default DroppinConnectButton
