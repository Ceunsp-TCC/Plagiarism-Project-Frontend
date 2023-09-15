import { z } from 'zod'

export const linkTeacherSchema = z.object({
  teacher: z.string().nonempty('Insira um professor válido'),
})
