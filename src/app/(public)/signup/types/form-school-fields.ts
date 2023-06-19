import z from 'zod'
import { formSchoolSchema } from '@/app/(public)/signup/schemas'

export type FormSchoolFields = z.infer<typeof formSchoolSchema>
