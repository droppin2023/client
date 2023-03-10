import { createContext, useContext, useState } from 'react'

import { Category, DiscordGuild, Quest } from '@queries/common'

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.Other)
  const [repUnit, setRepUnit] = useState<string>('')
  const [questsDiscord, setQuestsDiscord] = useState<Quest[]>([])
  const [questsForm, setQuestsForm] = useState<Quest[]>([])
  const [discord, setDiscord] = useState<DiscordGuild>({
    guildId: '',
    name: '',
    link: '',
  })

  return (
    <CreateCommunityContext.Provider
      value={{
        localImgUrl,
        name,
        description,
        website,
        selectedCategory,
        repUnit,
        questsDiscord,
        questsForm,
        discord,
        email,
        password,
        setLocalImgUrl,
        setName,
        setDescription,
        setWebsite,
        setSelectedCategory,
        setRepUnit,
        setQuestsDiscord,
        setQuestsForm,
        setDiscord,
        setEmail,
        setPassword,
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
