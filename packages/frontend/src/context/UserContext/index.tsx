import { User } from '@queries/common'
import useLazyCheckLogin from '@queries/useLazyCheckLogin'
import useLazyFetchUserDetail from '@queries/useLazyFetchUserDetail'
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

  // lazy check for user login
  const handleUserLogin = async (username: string) => {
    const userData = await fetchUserDetail({ username })
    console.log('LAZY HANDLE LOGIN', userData)

    // load the user data to the user state
    setUser({
      username: userData?.username as string,
      address: address as string,
      image: userData?.image as string,
      name: userData?.name as string,
      discord: userData?.discord,
    })
    setIsLoggedIn(true)
  }

  const {
    fetchUserDetail,
    isLoading: fetchUserDetailLoading,
    error: fetchUserDetailError,
  } = useLazyFetchUserDetail()

  const { address } = useAccount({
    onConnect: async ({ address, isReconnected }) => {
      const loginData = await checkLogin({ address: (address as string).toLowerCase() })
      console.log('LOGIN STATUS', loginData)

      // if user not registered we redirect to registration
      if ((loginData?.isSignedUp || false) === false) {
        if (router.asPath !== '/signup') {
          router.push('/signup')
        }
      } else {
        const userData = await fetchUserDetail({ username: loginData?.username as string })
        console.log('USER DETAIL', userData)

        // load the user data to the user state
        setUser({
          username: userData?.username as string,
          address: address as string,
          image: userData?.image as string,
          name: userData?.name as string,
          discord: userData?.discord,
        })
        setIsLoggedIn(true)
      }
    },
    onDisconnect: () => {
      setIsLoggedIn(false)
      setUser(null)
      if (router.asPath !== '/') {
        router.push('/')
      }
    },
  })

  // do the fun stuff
  return (
    <>
      <UserContext.Provider
        value={{
          isLoggedIn,
          handleUserLogin,
          user,
          isLoading: fetchUserDetailLoading || checkLoginLoading,
        }}
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
