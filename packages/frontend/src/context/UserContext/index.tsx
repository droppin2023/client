import { User } from '@components/queries/common'
import useLazyCheckLogin from '@components/queries/useLazyCheckLogin'
import { useRouter } from 'next/router'
import { createContext, useContext, useRef, useState } from 'react'
import { useAccount, useDisconnect } from 'wagmi'

import type { UserContextValue, UserProviderProps } from './UserContext.types'

const UserContext = createContext<UserContextValue | undefined>(undefined)

const UserProvider = ({ children }: UserProviderProps) => {
  // @rick i will only expose the bool and functions to the outside
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const { disconnect } = useDisconnect()
  const { isConnected } = useAccount()
  const router = useRouter()
  const cancelRef = useRef()

  const { checkLogin, isLoading, error } = useLazyCheckLogin()

  // referring to wallet connection here
  const logIn = async (address: string) => {
    const loginData = await checkLogin({ address: address.toLowerCase() })

    // if user not registered we redirect to registration
    if (error) {
      if (router.asPath !== '/signup' && isConnected) {
        router.push('/signup')
      }
    } else {
      console.log('[UserProvider]', `${loginData?.username} is registered`)

      // load the user data to the user state
    }
  }

  const logOut = () => {
    setIsLoggedIn(false)
    setUser(null)
    disconnect()
  }

  // do the fun stuff
  return (
    <>
      <UserContext.Provider value={{ isLoggedIn, user, logIn, logOut, isLoading }}>
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
