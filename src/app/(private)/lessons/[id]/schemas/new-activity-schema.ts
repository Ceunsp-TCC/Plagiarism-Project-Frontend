import { z } from 'zod'

export const newActivitySchema = z.object({
  title: z.string().nonempty('Insira um título válido'),
  comments: z.string().optional(),
  type: z.enum(['NOTICE', 'ACADEMICPAPER'], {
    errorMap: () => {
      return { message: 'Insira uma atividade válida' }
    },
  }),
})
