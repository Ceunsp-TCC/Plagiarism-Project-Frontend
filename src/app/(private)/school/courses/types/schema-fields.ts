import { z } from 'zod'
import {
  filtersSchema,
  newCourseSchema,
} from '@/app/(private)/school/courses/schemas'

export type FiltersFields = z.infer<typeof filtersSchema>

export type NewCourseFields = z.infer<typeof newCourseSchema>
