import { createContext, useContext } from 'react'

import type { DaoPageContextValue, DaoPageProviderProps } from './DaoPageContext.types'

const DaoPageContext = createContext<DaoPageContextValue | undefined>(undefined)

const DaoPageProvider = ({ children, isAdmin = false, repUnit, id }: DaoPageProviderProps) => {
  // do the fun stuff
  return (
    <DaoPageContext.Provider value={{ isAdmin, repUnit, id }}>{children}</DaoPageContext.Provider>
  )
}

const useDaoPageContext = () => {
  const context = useContext(DaoPageContext)
  if (!context) throw new Error(`"useDaoPageContext" must be used with "DaoPageProvider"`)

  return context
}

export { DaoPageProvider, useDaoPageContext }
