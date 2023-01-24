import { createContext, useContext, useState } from 'react'

import { Category } from '@components/queries/common'

import type {
  CreateCommunityContextValue,
  CreateCommunityProviderProps,
} from './CreateCommunityContext.types'

const CreateCommunityContext = createContext<CreateCommunityContextValue | undefined>(undefined)

const CreateCommunityProvider = ({ children }: CreateCommunityProviderProps) => {
  const [localImgUrl, setLocalImgUrl] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [website, setWebsite] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.Other)
  const [repUnit, setRepUnit] = useState<string>('')

  return (
    <CreateCommunityContext.Provider
      value={{
        localImgUrl,
        name,
        description,
        website,
        selectedCategory,
        repUnit,
        setLocalImgUrl,
        setName,
        setDescription,
        setWebsite,
        setSelectedCategory,
        setRepUnit,
      }}
    >
      {children}
    </CreateCommunityContext.Provider>
  )
}

const useCreateCommunityContext = () => {
  const context = useContext(CreateCommunityContext)
  if (!context)
    throw new Error(`"useCreateCommunityContext" must be used with "CreateCommunityProvider"`)

  return context
}

export { CreateCommunityProvider, useCreateCommunityContext }
