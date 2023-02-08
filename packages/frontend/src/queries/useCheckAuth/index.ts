import axios from 'axios'
import { useState } from 'react'
import { CHECK_AUTH } from './useCheckAuth.constants'

const useCheckAuth = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const checkAuth = async (sessionID: string) => {
    setIsLoading(true)
    //should also get from server
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzU5MzA3NjEsImp0aSI6IjY0ZTA4NjJlLTE1YTktNGNjMi05NWEyLTA5NDk5MTAxOWMwMyIsImlhdCI6MTY3NTg0NDM2MSwibmJmIjoxNjc1ODQ0MzYxLCJzdWIiOiI0NTZiMjNiNC1kMzFlLTRiZGEtODk5NC05N2E4MGY2ZWQ3ZDkiLCJzY29wZSI6ImFwaSIsImFjY291bnQiOnsidmVyaWZpZWQiOnRydWUsIm9yZ2FuaXphdGlvbiI6IjdiODBlMTNiLTM1NTAtNDUzOC1hZGIzLWYzNDE4M2IwYzJiMCIsInJvbGUiOiJPV05FUiIsImVtYWlsIjoiZHJvcHBpbkBnbWFpbC5jb20ifX0.PD_8aHyvw_g-6Dv5nwW76_Q2EN7WUNQfmjq2qlrIK7M'
    const offerId = '0188b6be-0730-4cdd-be95-cf58cf21e2e5'
    // const sessionId = '5311177e-8305-4580-9b9e-598cf31bb059'

    try {
      const res = await axios.get(
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
