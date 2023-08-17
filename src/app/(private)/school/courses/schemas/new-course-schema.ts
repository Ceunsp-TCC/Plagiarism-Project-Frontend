import { z } from 'zod'
import { removeFormatMoney } from '@utils'

export const newCourseSchema = z.object({
  name: z.string().nonempty('Insira um nome válido'),
  description: z.string().optional(),
  modality: z.enum(['HYBRID', 'INPERSON', 'ONLINE'], {
    errorMap: () => {
      return { message: 'Insira uma modalidade válida' }
    },
  }),
  category: z.string().nonempty('Insira uma categoria válida'),
  price: z
    .string()
    .transform((value) => removeFormatMoney(value))
    .refine(
      (value) => {
        const minValue = 0.01
        const minValuePermitted = value >= minValue
        return minValuePermitted
      },
      {
        message: 'Valor minímo R$ 0,01',
      },
    )
    .transform((value) => value.toString()),
  image: z
    .any()
    .refine((file: FileList) => file.length !== 0 || file === undefined, {
      message: 'Imagem inválida',
    })
    .refine(
      (file: FileList) => {
        const hasFile = file.length !== 0 && file !== undefined
        const currentTypeFile =
          hasFile &&
          (file[0].type === 'image/png' || file[0].type === 'image/jpeg')
        return currentTypeFile
      },
      {
        message: 'Imagem inválida',
      },
    )
    .refine(
      (file: FileList) => {
        const hasFile = file.length !== 0 && file !== undefined
        const maxSize = 5000000
        const fileSize = hasFile ? file[0].size : 0
        const isValidFile = fileSize < maxSize

        return isValidFile
      },
      {
        message: 'Tamanho máximo de 5MB',
      },
    ),
})
