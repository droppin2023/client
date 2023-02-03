// PUT THE MAIN HOOK LOGIC HERE

import axios from 'axios'
import { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'

import { QuestType } from '../common'
import type { FetchBadgeDetailParams, FetchBadgeDetailResponse } from './useFetchBadgeDetail.types'
import { GET_BADGE_DETAIL } from './userFetchBadgeDetail.constants'

// {
//    	"_id": "63db9776a7fd5701d4fbc616",
//    	"id": "1",
//    	"address": "0x3B02fF1e626Ed7a8fd6eC5299e2C54e1421B626B",
//    	"description": "Welcome Holder! This is the badge for DeGods NFT holders.",
//    	"requiredQuests": [
//    		{
//    			"_id": "63db9776a7fd5701d4fbc614",
//    			"id": "1",
//    			"condition": {
//    				"type": "discord",
//    				"conditionDetail": {
//    					"guildId": 1002167946828853200,
//    					"roleId": 1016003195111227500
//    				}
//    			},
//    			"engagePoints": {
//    				"_hex": "0x0a",
//    				"_isBigNumber": true
//    			},
//    			"groupId": "1",
//    			"name": "Verify @t00bs role",
//    			"detail": "Verify your @t00bs role in Discord. And prove you are y00ts NFT holder"
//    		}
//    	],
//    	"engagePointsThreshold": {
//    		"_hex": "0x0a",
//    		"_isBigNumber": true
//    	},
//    	"badgePrice": {
//    		"_hex": "0x00",
//    		"_isBigNumber": true
//    	},
//    	"name": "DeGods Holder",
//    	"image": "https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreicndlrqersl63a7fpk6zzw73lsklj5bwsidk74n4solbcyz2g3viq.ipfs.nftstorage.link/",
//    	"groupId": "1"
//    }

// THIS FUNCTION CLEANS UP THE DATA, JUST IN CASE THERE ARE NULLS
const normalizeData = (data: FetchBadgeDetailResponse | undefined) => {
  const id = Number(data?.id) || -1
  const address = data?.address || ''
  const description = data?.description || ''
  const engagePointsThreshold = BigNumber.from(data?.engagePointsThreshold || 0).toNumber() || 0
  const badgePrice = BigNumber.from(data?.badgePrice || 0).toNumber() || 0
  const name = data?.name || ''
  const image = data?.image || 'https://picsum.photos/id/1/200'
  const groupId = data?.groupId || ''

  const normalizedRequiredQuests = []

  for (let i = 0; i < (data?.requiredQuests || []).length; i++) {
    const currentEntry = data?.requiredQuests[i]

    const normalizedRequiredQuest = {
      id: -1,
      condition: {
        type: QuestType.form,
        conditionDetail: {
          guildId: -1,
          roleId: -1,
        },
      },
      engagePoints: 0,
      groupId: '',
      name: '',
      detail: '',
    }

    normalizedRequiredQuest.id = Number(currentEntry?.id) || -1
    normalizedRequiredQuest.condition.type = currentEntry?.condition?.type || QuestType.form
    normalizedRequiredQuest.condition.conditionDetail.guildId =
      currentEntry?.condition?.conditionDetail?.guildId || -1
    normalizedRequiredQuest.condition.conditionDetail.roleId =
      currentEntry?.condition?.conditionDetail?.roleId || -1
    normalizedRequiredQuest.engagePoints = BigNumber.from(
      currentEntry?.engagePoints || 0,
    ).toNumber()
    normalizedRequiredQuest.groupId = currentEntry?.groupId || ''
    normalizedRequiredQuest.name = currentEntry?.name || ''
    normalizedRequiredQuest.detail = currentEntry?.detail || ''

    normalizedRequiredQuests.push(normalizedRequiredQuest)
  }

  return {
    id,
    address,
    description,
    engagePointsThreshold,
    badgePrice,
    name,
    image,
    groupId,
    requiredQuests: normalizedRequiredQuests,
  }
}

// THIS IS OUR QUERY HOOOK
const useFetchBadgeDetail = ({ badgeId }: FetchBadgeDetailParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<ReturnType<typeof normalizeData>>(normalizeData(undefined))
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setIsLoading(true)

    axios
      .get<FetchBadgeDetailResponse>(`${GET_BADGE_DETAIL}/${badgeId}`, {
        headers: {
          'Content-Type': '*/*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      })
      .then((data) => {
        console.log('BADGE DATA', normalizeData(data.data))
        setData(normalizeData(data.data))
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false))
  }, [badgeId])

  // return { data: normalizeData(data), isLoading, error }

  return { data, isLoading, error }
}

export default useFetchBadgeDetail
