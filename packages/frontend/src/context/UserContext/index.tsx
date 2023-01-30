import { User } from '@components/queries/common'
import useLazyCheckLogin from '@components/queries/useLazyCheckLogin'
import useLazyFetchUserDetail from '@components/queries/useLazyFetchUserDetail'
import { useRouter } from 'next/router'
import { createContext, useContext, useState } from 'react'
import { useAccount, useDisconnect } from 'wagmi'

import type { UserContextValue, UserProviderProps } from './UserContext.types'

const UserContext = createContext<UserContextValue | undefined>(undefined)

const UserProvider = ({ children }: UserProviderProps) => {
  // @rick i will only expose the bool and functions to the outside
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const { disconnect } = useDisconnect()

  const router = useRouter()

  const { checkLogin, isLoading: checkLoginLoading, error: checkLoginError } = useLazyCheckLogin()
  const {
    fetchUserDetail,
    isLoading: fetchUserDetailLoading,
    error: fetchUserDetailError,
  } = useLazyFetchUserDetail()

  const { address } = useAccount({
    onConnect: async ({ address, isReconnected }) => {
      const loginData = await checkLogin({ address: (address as string).toLowerCase() })

      // if user not registered we redirect to registration
      if (checkLoginError) {
        if (router.asPath !== '/signup') {
          router.push('/signup')
        }
      } else {
        const userData = await fetchUserDetail({ username: loginData?.username })

        // load the user data to the user state
        setUser({
          username: userData?.username as string,
          address: address as string,
          image: userData?.image as string,
          name: userData?.name as string,
        })
        setIsLoggedIn(true)
      }
    },
    onDisconnect: () => {
      setIsLoggedIn(false)
      setUser(null)
    },
  })

  // do the fun stuff
  return (
    <>
      <UserContext.Provider
        value={{ isLoggedIn, user, isLoading: fetchUserDetailLoading && checkLoginLoading }}
      >
        {children}
      </UserContext.Provider>
    </>
  )
}

const useUserContext = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error(`"useUserContext" must be used with "UserProvider"`)

  return context
}

export { UserProvider, useUserContext }
