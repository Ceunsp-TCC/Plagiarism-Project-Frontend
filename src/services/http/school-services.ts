import { schoolGuardianApi } from '@/services'
import type { CreateProps } from '@/services/types'
import type { DefaultResponse } from '@/@types/base-types'

export const schoolServices = {
  create: async (body: CreateProps) => {
    const response = await schoolGuardianApi.post<DefaultResponse>(
      '/v1/schools/create',
      body,
    )

    return response.data
  },
  validDocument: async (document: string) => {
    const body = {
      document,
    }
    const response = await schoolGuardianApi.post<DefaultResponse>(
      '/v1/schools/valid-document',
      body,
    )

    return response.data
  },
}
