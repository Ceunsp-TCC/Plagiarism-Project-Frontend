import { schoolGuardianApi } from '@services'
import type { CourseItem, GetAllCoursesProps } from '@services'
import type { DefaultResponseWithContent, DefaultPaginate } from '@types'

export const courseServices = {
  getAll: async ({ currentPage = 1, name = '' }: GetAllCoursesProps) => {
    const params = {
      numberlinesPerPage: 5,
      currentPage,
      name,
    }
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<DefaultPaginate<CourseItem>>
    >('v1/courses/get-all', { params })

    return response.data.content
  },
}
