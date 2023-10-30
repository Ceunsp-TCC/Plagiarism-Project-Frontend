import { z } from 'zod'
import { filtersSchema } from '@/app/(private)/ortography-corrections/schemas'

export type FiltersFields = z.infer<typeof filtersSchema>
