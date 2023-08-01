import { schoolGuardianApi } from '@/services'
import type { DefaultResponseWithContent } from '@/@types/base-types'
import type { CreateStudentProps, CreateStudentContent } from '@/services/types'

export const studentServices = {
  create: async (body: CreateStudentProps) => {
    const response = await schoolGuardianApi.post<
      DefaultResponseWithContent<CreateStudentContent>
    >('v1/students/create', body)

    return response.data
  },
}
