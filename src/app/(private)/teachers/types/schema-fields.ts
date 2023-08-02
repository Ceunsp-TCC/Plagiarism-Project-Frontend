import { z } from 'zod'
import { newTeacherSchema } from '@/app/(private)/teachers/schemas'

export type NewTeacherFields = z.infer<typeof newTeacherSchema>
