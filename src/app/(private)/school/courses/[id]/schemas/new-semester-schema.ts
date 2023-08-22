import { z } from 'zod'

export const newSemesterSchema = z.object({
  name: z.string().nonempty('Insira um nome válido'),
  description: z.string().optional(),
})
