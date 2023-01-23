import { createContext, useContext } from 'react'

import type { UserPageContextValue, UserPageProviderProps } from './UserPageContext.types'

const UserPageContext = createContext<UserPageContextValue | undefined>(undefined)

const UserPageProvider = ({ children, userData }: UserPageProviderProps) => {
  return <UserPageContext.Provider value={{ userData }}>{children}</UserPageContext.Provider>
}

const useUserPageContext = () => {
  const context = useContext(UserPageContext)
  if (!context) throw new Error(`"useUserPageContext" must be used with "UserPageProvider"`)

  return context
}

export { UserPageProvider, useUserPageContext }
