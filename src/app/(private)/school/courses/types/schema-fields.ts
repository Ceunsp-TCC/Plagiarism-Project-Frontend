import { z } from 'zod'
import { filtersSchema } from '@/app/(private)/school/courses/schemas'

export type FiltersFields = z.infer<typeof filtersSchema>
