import { Course } from '@services'

export type NameAndDescriptionProps = {
  image: string
  name: string
  description: string
}

export type SemestersProps = { semesters: Course['semesters'] }
