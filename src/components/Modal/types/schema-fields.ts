import { z } from 'zod'
import { newPasswordSchema } from '../schemas'

export type NewPasswordFields = z.infer<typeof newPasswordSchema>
