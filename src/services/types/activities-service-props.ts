import type { ActivityType } from '@types'

export type CreateActivityProps = {
  lessonId: number
  title: string
  comments?: string
  type: ActivityType
}
export type Activity = {
  id: number
  title: string
  comments?: string
  type: ActivityType
  createdAt: string
  sent?: boolean
  note?: number
}

export type GetAllActivitiesProps = {
  lessonId: number
}
export type GetActivityByIdProps = {
  activityId: number
}
