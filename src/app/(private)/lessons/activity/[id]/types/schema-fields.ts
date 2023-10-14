import { z } from 'zod'
import { sendAcademicPaperSchema } from '@/app/(private)/lessons/activity/[id]/schemas'

export type SendAcademicPaperFields = z.infer<typeof sendAcademicPaperSchema>
