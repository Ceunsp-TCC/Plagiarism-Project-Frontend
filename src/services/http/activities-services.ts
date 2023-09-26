import { schoolGuardianApi } from '@services'
import type { CreateActivityProps } from '@services'
import type { DefaultResponse } from '@types'

export const activitiesServices = {
  create: async ({
    title = '',
    comments = '',
    lessonId = 0,
    type = 'ACADEMICPAPER',
  }: CreateActivityProps) => {
    const body = {
      title,
      comments,
      type,
    }
    const response = await schoolGuardianApi.post<DefaultResponse>(
      `v1/activities/create/${lessonId}`,
      body,
    )

    return response.data
  },
}
