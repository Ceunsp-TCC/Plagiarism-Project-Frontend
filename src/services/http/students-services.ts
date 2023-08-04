import { schoolGuardianApi } from '@services'
import type {
  DefaultResponseWithContent,
  DefaultPaginate,
} from '@/@types/base-types'
import type {
  CreateStudentProps,
  CreateStudentContent,
  Student,
  GetAllStudentsProps,
} from '@services'

export const studentServices = {
  create: async (body: CreateStudentProps) => {
    const response = await schoolGuardianApi.post<
      DefaultResponseWithContent<CreateStudentContent>
    >('v1/students/create', body)

    return response.data
  },
  getAll: async ({ currentPage = 1, name = '' }: GetAllStudentsProps) => {
    const params = {
      numberlinesPerPage: 10,
      currentPage,
      name,
    }
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<DefaultPaginate<Student>>
    >('v1/students/get-all', { params })

    return response.data.content
  },
}
