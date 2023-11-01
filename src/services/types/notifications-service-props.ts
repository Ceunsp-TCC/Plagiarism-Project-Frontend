export type NotificationData = {
  navigateTo: string
  reactQueryKeys?: string[]
}

export type GetNotificationContent = {
  id: number
  message: string
  data: NotificationData
}
