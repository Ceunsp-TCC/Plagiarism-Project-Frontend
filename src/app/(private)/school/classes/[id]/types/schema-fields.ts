import { z } from 'zod'
import { linkTeacherSchema } from '@/app/(private)/school/classes/[id]/schemas'

export type LinkTeacherFields = z.infer<typeof linkTeacherSchema>
