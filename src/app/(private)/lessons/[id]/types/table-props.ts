import type { ActivityType } from '@/@types'
export type ItemProps = {
  title: string
  comments?: string
  createdAt: string
  type: ActivityType
  sent?: boolean
  isStudent: boolean
  note: number | null
  onClick: () => void
}
