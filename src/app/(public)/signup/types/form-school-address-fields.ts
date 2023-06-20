import z from 'zod'
import { formSchoolAddressSchema } from '@/app/(public)/signup/schemas'

export type FormSchoolAddressFields = z.infer<typeof formSchoolAddressSchema>
