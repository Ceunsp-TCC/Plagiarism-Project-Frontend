import { z } from 'zod'

export const filtersSchema = z.object({
  identifier: z.string().optional(),
})
