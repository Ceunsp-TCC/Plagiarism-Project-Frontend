import { schoolGuardianApi } from '@services'
import type { CreateLessonProps } from '@services'
import type { DefaultResponse } from '@types'

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
}
