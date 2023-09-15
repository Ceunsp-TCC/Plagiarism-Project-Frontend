import { Course } from '@services'

export type HeaderProps = {
  image: string
  name: string
  description: string
}

export type SemestersProps = { semesters: Course['semesters'] }
