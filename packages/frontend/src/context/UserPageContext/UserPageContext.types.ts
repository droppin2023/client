import type { NormalizedUserResponse } from '@queries/useFetchUserDetail/useFetchUserDetail.types'
import type { ReactNode } from 'react'

export interface UserPageContextValue {
  userData: NormalizedUserResponse & {
    username: string
  }
}

export interface UserPageProviderProps {
  children: ReactNode
  userData: NormalizedUserResponse & {
    username: string
  }
}
