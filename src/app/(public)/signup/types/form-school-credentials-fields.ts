import z from 'zod'
import { formSchoolCredentialsSchema } from '@/app/(public)/signup/schemas'

export type FormSchoolCredentialsFields = z.infer<
  typeof formSchoolCredentialsSchema
>
