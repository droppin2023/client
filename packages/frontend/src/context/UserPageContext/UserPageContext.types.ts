import type { FetchUserDetailResponse } from '@components/queries/useFetchUserDetail/useFetchUserDetail.types'
import type { ReactNode } from 'react'

export interface UserPageContextValue {
  userData: FetchUserDetailResponse & {
    username: string
  }
}

export interface UserPageProviderProps {
  children: ReactNode
  userData: FetchUserDetailResponse & {
    username: string
  }
}
