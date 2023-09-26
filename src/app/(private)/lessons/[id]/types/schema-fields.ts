import { z } from 'zod'
import { newActivitySchema } from '@/app/(private)/lessons/[id]/schemas'

export type NewActivityFields = z.infer<typeof newActivitySchema>
