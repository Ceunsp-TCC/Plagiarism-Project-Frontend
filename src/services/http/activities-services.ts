import { schoolGuardianApi } from '@services'
import type {
  CreateActivityProps,
  Activity,
  GetAllActivitiesProps,
  GetActivityByIdProps,
} from '@services'
import type { DefaultResponse, DefaultResponseWithContent } from '@types'

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
  getAll: async ({ lessonId = 0 }: GetAllActivitiesProps) => {
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<Activity[]>
    >(`v1/activities/get-all/${lessonId}`)

    return response.data.content
  },
  getById: async ({ activityId = 0 }: GetActivityByIdProps) => {
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<Activity>
    >(`v1/activities/get-by-id/${activityId}`)

    return response.data.content
  },
}
