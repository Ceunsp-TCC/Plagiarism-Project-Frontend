import { schoolGuardianApi } from '@services'
import type {
  CreateClassProps,
  GetAllClassesProps,
  GetOneClassProps,
  GetStudentsByClassProps,
  LinkTeacherAndLessonProps,
  Class,
  Student,
} from '@services'
import type {
  DefaultResponse,
  DefaultResponseWithContent,
  DefaultPaginate,
} from '@types'

export const classServices = {
  create: async ({ courseId = 0 }: CreateClassProps) => {
    const response = await schoolGuardianApi.post<DefaultResponse>(
      `v1/classes/create/${courseId}`,
    )

    return response.data
  },
  getAll: async ({
    currentPage = 1,
    numberlinesPerPage = 10,
    name = '',
  }: GetAllClassesProps) => {
    const params = {
      numberlinesPerPage,
      currentPage,
      name,
    }
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<DefaultPaginate<Class>>
    >('v1/classes/get-all', { params })

    return response.data.content
  },
  getOne: async ({ classId = 0 }: GetOneClassProps) => {
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<Class>
    >(`v1/classes/get-by-id/${classId}`)

    return response.data.content
  },
  getStudents: async ({
    classId = 1,
    currentPage = 1,
    numberlinesPerPage = 10,
    name = '',
  }: GetStudentsByClassProps) => {
    const params = {
      numberlinesPerPage,
      currentPage,
      name,
    }
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<DefaultPaginate<Student>>
    >(`v1/classes/get-students/${classId}`, { params })

    return response.data.content
  },

  linkTeacherAndLesson: async ({
    lessonId = 0,
    teacherId = 0,
  }: LinkTeacherAndLessonProps) => {
    const body = {
      lessonId,
      teacherId,
    }
    const response = await schoolGuardianApi.put<DefaultResponse>(
      '/v1/classes/link-teacher-and-lesson',
      body,
    )

    return response.data
  },
}
