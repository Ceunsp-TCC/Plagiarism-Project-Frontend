import { schoolGuardianApi } from '@/services'
import type { DefaultResponse } from '@/@types/base-types'
import type { CreateStudentProps } from '@/services/types'

export const studentServices = {
  create: async (body: CreateStudentProps) => {
    const response = await schoolGuardianApi.post<DefaultResponse>(
      'v1/students/create',
      body,
    )

    return response.data
  },
}
