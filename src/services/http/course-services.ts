import { schoolGuardianApi } from '@services'
import type {
  Course,
  GetAllCoursesProps,
  CreateCourseProps,
  GetOneCourseProps,
} from '@services'
import type {
  DefaultResponseWithContent,
  DefaultPaginate,
  DefaultResponse,
} from '@types'

export const courseServices = {
  create: async (body: CreateCourseProps) => {
    const formData = new FormData()

    for (const key in body) {
      formData.append(key, (body as any)[key])
    }
    const response = await schoolGuardianApi.post<DefaultResponse>(
      'v1/courses/create',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/formdata',
        },
      },
    )

    return response.data
  },
  getAll: async ({ currentPage = 1, name = '' }: GetAllCoursesProps) => {
    const params = {
      numberlinesPerPage: 5,
      currentPage,
      name,
    }
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<DefaultPaginate<Course>>
    >('v1/courses/get-all', { params })

    return response.data.content
  },
  getOne: async ({ courseId = 0 }: GetOneCourseProps) => {
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<Course>
    >(`v1/courses/get-by-id/${courseId}`)

    return response.data.content
  },
}
