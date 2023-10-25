export type NotificationData = {
  navigateTo: string
}

export type GetNotificationContent = {
  id: number
  message: string
  data: NotificationData
}
