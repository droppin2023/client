import { qrProofRequestParams } from './ClaimModal.types'
import { env } from '@shared/environment'

export const getTwitterTweetContent = (badgeName: string) =>
  `Hi, I have just claimed the ${badgeName} badge via Droppin!`

export const qrProofRequestJson = (params: qrProofRequestParams) => {
  const qrProofRequestJsonConst = {
    id: params.schemaId,
    typ: 'application/iden3comm-plain-json',
    type: 'https://iden3-communication.io/proofs/1.0/contract-invoke-request',
    body: {
      transaction_data: {
        contract_address: env.droppinDiamond,
        method_id: 'b68967e2',
        chain_id: 80001,
        network: 'polygon-mumbai',
      },
      reason: 'claim your badge',
      scope: [
        {
          id: 1,
          circuit_id: 'credentialAtomicQuerySig',
          rules: {
            query: {
              allowed_issuers: ['*'],
              req: {
                engagementScore: {
                  $gt: params.engagementScore,
                },
              },
              schema: {
                url: params.schemaHash,
                type: params.schemaName,
              },
            },
          },
        },
      ],
    },
  }

  return qrProofRequestJsonConst
}
