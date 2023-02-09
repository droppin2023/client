import axios from 'axios'
import { useState } from 'react'
import { ACTIVATE_ACCOUNT, CREATE_ISSUER, CREATE_ORG, SIGNIN } from './useCheckAuth.constants'
import { InitPolygonIdParams } from './usePolygonIDInit.types'

const usePolygonIDInit = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>()

  const initPolygonId = async (params: InitPolygonIdParams) => {
    setIsLoading(true)

    try {
      const res = await axios.post(CREATE_ORG, {
        email: params.email,
        password: params.password,
      })

      const orgId = res.data.id
      const res1 = await axios.post(SIGNIN, {
        email: params.email,
        password: params.password,
      })

      const token = res1.data.token
      const res2 = await axios.post(
        ACTIVATE_ACCOUNT,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      const token_final = res2.data.token
      const res3 = await axios.post(
        CREATE_ISSUER,
        {
          displayName: params.displayName,
          legalName: params.legalName,
          logo: params.logo,
        },
        {
          headers: {
            Authorization: `Bearer ${token_final}`,
          },
        },
      )
      const issuerId = res3.data.id
      const result = {
        issuerId,
        token: token_final,
      }
      return result
    } catch (e) {
      setIsLoading(false)
      setError(e)
    }
  }

  return { initPolygonId, isLoading, error }
}

export default usePolygonIDInit
