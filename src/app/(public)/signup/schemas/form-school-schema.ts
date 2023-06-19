/* eslint-disable no-useless-escape */
/* eslint-disable prefer-regex-literals */
import z from 'zod'

export const formSchoolSchema = z.object({
  name: z.string().nonempty('Por favor, insira o nome da escola'),
  email: z
    .string()
    .nonempty('Por favor, insira o email da escola')
    .email('Por favor, insira um email válido'),
  phoneNumber: z
    .string()
    .nonempty('Por favor, insira o telefone da escola')
    .regex(new RegExp(/^\([1-9]{2}\) 9[0-9]{4}\-[0-9]{4}$/), {
      message: 'Por favor, insira um telefone válido',
    }),
})
