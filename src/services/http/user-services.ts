import { schoolGuardianApi } from '@/services'
import type { DefaultResponse } from '@/@types/base-types'

export const userServices = {
  validEmail: async (email: string) => {
    const body = {
      email,
    }

    const response = await schoolGuardianApi.post<DefaultResponse>(
      '/v1/users/valid-email',
      body,
    )

    return response.data
  },
  validZipcode: async (zipcode: string) => {
    const body = {
      zipcode,
    }

    const response = await schoolGuardianApi.post<DefaultResponse>(
      '/v1/users/valid-zipcode',
      body,
    )

    return response.data
  },
}
