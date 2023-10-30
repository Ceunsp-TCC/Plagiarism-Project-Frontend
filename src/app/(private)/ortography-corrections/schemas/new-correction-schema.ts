import { z } from 'zod'

export const newCorrectionSchema = z.object({
  userProvidedIdentifier: z.string().nonempty('Insira um identificador válido'),
  original: z
    .any()
    .refine((file: FileList) => file.length !== 0 || file === undefined, {
      message: 'Arquivo inválido',
    })
    .refine(
      (file: FileList) => {
        const hasFile = file.length !== 0 && file !== undefined
        const currentTypeFile = hasFile && file[0].type === 'application/pdf'
        return currentTypeFile
      },
      {
        message: 'Arquivo inválido',
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
})
