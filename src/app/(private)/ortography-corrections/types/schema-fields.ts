import { z } from 'zod'
import {
  filtersSchema,
  newCorrectionSchema,
} from '@/app/(private)/ortography-corrections/schemas'

export type FiltersFields = z.infer<typeof filtersSchema>
export type NewCorrectionFields = z.infer<typeof newCorrectionSchema>
