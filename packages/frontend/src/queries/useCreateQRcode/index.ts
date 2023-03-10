import { withAuthInstance } from '@shared/apiCommon'
import { useState } from 'react'
import { CREATE_QRCODE } from './useCreateQRcode.constants'
import { createQRcodeParams } from './useCreateQRcode.types'

const useCreateQRcode = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const createQRcode = async (params: createQRcodeParams) => {
    setIsLoading(true)
    //should also get from server
    // const token =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzU5MzA3NjEsImp0aSI6IjY0ZTA4NjJlLTE1YTktNGNjMi05NWEyLTA5NDk5MTAxOWMwMyIsImlhdCI6MTY3NTg0NDM2MSwibmJmIjoxNjc1ODQ0MzYxLCJzdWIiOiI0NTZiMjNiNC1kMzFlLTRiZGEtODk5NC05N2E4MGY2ZWQ3ZDkiLCJzY29wZSI6ImFwaSIsImFjY291bnQiOnsidmVyaWZpZWQiOnRydWUsIm9yZ2FuaXphdGlvbiI6IjdiODBlMTNiLTM1NTAtNDUzOC1hZGIzLWYzNDE4M2IwYzJiMCIsInJvbGUiOiJPV05FUiIsImVtYWlsIjoiZHJvcHBpbkBnbWFpbC5jb20ifX0.PD_8aHyvw_g-6Dv5nwW76_Q2EN7WUNQfmjq2qlrIK7M'
    // const offerId = '0188b6be-0730-4cdd-be95-cf58cf21e2e5'

    try {
      const res = await withAuthInstance.post(
        CREATE_QRCODE + params.offerId,

        {
          headers: {
            Authorization: `Bearer ${params.token}`,
          },
        },
      )
      console.log(res)
      const sessionID = res.data.sessionID
      console.log('Session ID', sessionID)

      const res2 = await withAuthInstance.get(
        CREATE_QRCODE + params.offerId + '/download?sessionID=' + sessionID,

        {
          responseType: 'arraybuffer',
          headers: {
            Authorization: `Bearer ${params.token}`,
          },
        },
      )
      const base64ImageString = Buffer.from(res2.data, 'binary').toString('base64')
      const srcValue = 'data:image/png;base64,' + base64ImageString
      return { srcValue: srcValue || '', sessionID: res.data.sessionID || '' }
    } catch (e) {
      setIsLoading(false)
      setError(e)

      return { srcValue: '', sessionID: '' }
    }
  }

  return { createQRcode, isLoading, error }
}

export default useCreateQRcode
