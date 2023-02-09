import { useState } from 'react'
import { CHECK_AUTH } from './useCheckAuth.constants'
import { withAuthInstance } from '@shared/apiCommon'
import localStorageUtils from '@helpers/localStorageUtils'

const useCheckAuth = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const checkAuth = async (sessionID: string, offerId: string) => {
    setIsLoading(true)
    //should also get from server
    const { token } = localStorageUtils.read('polygon_id_user')
    console.log(offerId)
    // const offerId = '0188b6be-0730-4cdd-be95-cf58cf21e2e5'
    // const sessionId = '5311177e-8305-4580-9b9e-598cf31bb059'

    try {
      const res = await withAuthInstance.get(
        CHECK_AUTH + offerId + '?sessionID=' + sessionID,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log(res)
      const data = res.data

      return data
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { checkAuth, isLoading, error }
}

export default useCheckAuth
