import { uploadImage } from '@helpers/imageUtils'
import axios from 'axios'
import { useState } from 'react'
import { EDIT_GROUP } from './usePostEditGroup.constants'
import type { EditGroupParams } from './usePostEditGroup.types'

const usePostEditGroup = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const editGroup = async (params: EditGroupParams) => {
    setIsLoading(true)

    try {
      // upload images here
      const uploadUrl = await uploadImage(params.logo as string)

      const { logo, discord, ...restParams } = params
      const newParams = {
        ...restParams,
        logo: uploadUrl,
        discord: JSON.stringify(discord),
      }

      const { data, status } = await axios.post(EDIT_GROUP, newParams)

      if (status === 200) {
        setIsLoading(false)
        return data.data
      }

      throw new Error('Form Post Error!')
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { editGroup, isLoading, error }
}

export default usePostEditGroup
