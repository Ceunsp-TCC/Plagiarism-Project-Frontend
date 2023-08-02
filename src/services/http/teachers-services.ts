import { schoolGuardianApi } from '@/services'
import type { DefaultResponseWithContent } from '@/@types/base-types'
import type { CreateTeacherProps, CreateTeacherContent } from '@/services/types'

export const teacherServices = {
  create: async (body: CreateTeacherProps) => {
    const response = await schoolGuardianApi.post<
      DefaultResponseWithContent<CreateTeacherContent>
    >('v1/teachers/create', body)

    return response.data
  },
}
