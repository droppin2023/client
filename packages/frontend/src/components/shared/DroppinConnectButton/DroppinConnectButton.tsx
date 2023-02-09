/* eslint-disable no-debugger */
import Image from 'next/image'

import { ConnectButton } from '@rainbow-me/rainbowkit'

import { Avatar, Button } from '@chakra-ui/react'

import { danger, dangerHighlight, orange, orangeHighlight } from '@constants/colors'
import { useUserContext } from '@context/UserContext'

import ProfileDropdown from './components/ProfileDropdown'

import * as sty from './DroppinConnectButton.styles'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const DroppinConnectButton = () => {
  const { user, isLoggedIn } = useUserContext()
  const router = useRouter()

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
        console.log(
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        )
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

                  <Button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance ? ` (${account.displayBalance})` : ''}
                  </Button>

                  {isLoggedIn && (
                    <ProfileDropdown>
                      {/* TOD0: get user image here */}
                      {(user?.image || 'none') !== 'none' ? (
                        <Image
                          src={user?.image as string}
                          alt="Wallet avatar"
                          width={36}
                          height={36}
                          css={[sty.profileImg]}
                        />
                      ) : (
                        <Avatar width="36px" height="36px" name={user?.name} />
                      )}
                    </ProfileDropdown>
                  )}
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
