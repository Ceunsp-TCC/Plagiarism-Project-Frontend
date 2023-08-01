import { z } from 'zod'
import { newStudentSchema } from '@/app/(private)/students/schemas'

export type NewStudentFields = z.infer<typeof newStudentSchema>
