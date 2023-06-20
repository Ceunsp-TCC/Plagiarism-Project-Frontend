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
    })
    .transform((value) => value.replace(/\D/g, '')),
  CNPJ: z
    .string()
    .nonempty('Por favor, insira o cnpj da escola')
    .regex(new RegExp(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/), {
      message: 'Por favor, insira um cnpj válido',
    })
    .transform((value) => value.replace(/\D/g, '')),
})
