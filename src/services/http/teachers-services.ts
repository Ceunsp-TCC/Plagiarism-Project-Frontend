import { schoolGuardianApi } from '@services'
import type { DefaultResponseWithContent, DefaultPaginate } from '@types'
import type {
  CreateTeacherProps,
  CreateTeacherContent,
  GetAllTeachersProps,
  Teacher,
} from '@services'

export const teacherServices = {
  create: async (body: CreateTeacherProps) => {
    const response = await schoolGuardianApi.post<
      DefaultResponseWithContent<CreateTeacherContent>
    >('v1/teachers/create', body)

    return response.data
  },
  getAll: async ({ currentPage = 1, name = '' }: GetAllTeachersProps) => {
    const params = {
      numberlinesPerPage: 10,
      currentPage,
      name,
    }
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<DefaultPaginate<Teacher>>
    >('v1/teachers/get-all', { params })

    return response.data.content
  },
}
