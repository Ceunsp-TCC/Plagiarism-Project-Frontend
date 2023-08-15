import { z } from 'zod'
import {
  newStudentSchema,
  filtersSchema,
} from '@/app/(private)/school/students/schemas'

export type NewStudentFields = z.infer<typeof newStudentSchema>
export type FiltersFields = z.infer<typeof filtersSchema>
