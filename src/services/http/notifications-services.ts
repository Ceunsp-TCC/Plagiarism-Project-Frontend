import { schoolGuardianApi } from '@services'
import type { GetNotificationContent } from '@services'
import type { DefaultResponseWithContent } from '@types'

export const notificationsServices = {
  getNotification: async () => {
    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<GetNotificationContent>
    >('v1/notifications/get-current')

    return response.data.content
  },
}
