import { z } from 'zod'
import {
  newSemesterSchema,
  newLessonSchema,
} from '@/app/(private)/school/courses/[id]/schemas'

export type NewSemesterFields = z.infer<typeof newSemesterSchema>

export type NewLessonFields = z.infer<typeof newLessonSchema>
