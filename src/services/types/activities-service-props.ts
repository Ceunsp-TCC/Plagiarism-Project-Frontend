import type { ActivityType } from '@types'

export type CreateActivityProps = {
  lessonId: number
  title: string
  comments?: string
  type: ActivityType
}
