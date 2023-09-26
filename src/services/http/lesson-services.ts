import { schoolGuardianApi } from '@services'
import type {
  CreateLessonProps,
  Lesson,
  GetAllLessonsByTeacherProps,
  GetAllLessonsByStudentProps,
} from '@services'
import type {
  DefaultResponse,
  DefaultResponseWithContent,
  DefaultPaginate,
} from '@types'

export const lessonServices = {
  create: async ({
    name = '',
    place = '',
    description = '',
    semesterId = 0,
  }: CreateLessonProps) => {
    const body = {
      name,
      place,
      description,
    }
    const response = await schoolGuardianApi.post<DefaultResponse>(
      `v1/lessons/create/${semesterId}`,
      body,
    )

    return response.data
  },
  getByTeacher: async ({ currentPage = 1 }: GetAllLessonsByTeacherProps) => {
    const params = {
      numberlinesPerPage: 10,
      currentPage,
    }
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<DefaultPaginate<Lesson>>
    >(`v1/lessons/get-lessons-by-teacher`, { params })

    return response.data.content
  },

  getByStudent: async ({ currentPage = 1 }: GetAllLessonsByStudentProps) => {
    const params = {
      numberlinesPerPage: 10,
      currentPage,
    }
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<DefaultPaginate<Lesson>>
    >(`v1/lessons/get-lessons-by-student`, { params })

    return response.data.content
  },
}
