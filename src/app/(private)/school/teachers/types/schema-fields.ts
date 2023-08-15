import { z } from 'zod'
import {
  newTeacherSchema,
  filtersSchema,
} from '@/app/(private)/school/teachers/schemas'

export type NewTeacherFields = z.infer<typeof newTeacherSchema>
export type FiltersFields = z.infer<typeof filtersSchema>
