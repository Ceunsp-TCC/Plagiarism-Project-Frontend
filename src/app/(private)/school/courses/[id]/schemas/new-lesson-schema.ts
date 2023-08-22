import { z } from 'zod'

export const newLessonSchema = z.object({
  name: z.string().nonempty('Insira um nome válido'),
  place: z.string().nonempty('Insira um local válido'),
  description: z.string().optional(),
})
