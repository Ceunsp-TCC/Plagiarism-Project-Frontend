import { z } from 'zod'

export const sendAcademicPaperSchema = z.object({
  paper: z
    .any()
    .refine((file: FileList) => file.length !== 0 || file === undefined, {
      message: 'Trabalho inválido',
    })
    .refine(
      (file: FileList) => {
        const hasFile = file.length !== 0 && file !== undefined
        const currentTypeFile = hasFile && file[0].type === 'application/pdf'
        return currentTypeFile
      },
      {
        message: 'Trabalho inválido',
      },
    )
    .refine(
      (file: FileList) => {
        const hasFile = file.length !== 0 && file !== undefined
        const maxSize = 1000000
        const fileSize = hasFile ? file[0].size : 0
        const isValidFile = fileSize < maxSize

        return isValidFile
      },
      {
        message: 'Tamanho máximo de 1MB',
      },
    ),
  comments: z.string().optional(),
})
