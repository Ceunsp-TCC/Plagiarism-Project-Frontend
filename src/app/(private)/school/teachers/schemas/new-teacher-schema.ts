import { z } from 'zod'
import { checkIfEmailIsValid } from '@/app/(public)/signup/functions'
export const newTeacherSchema = z.object({
  name: z.string().nonempty('Insira um nome válido'),
  email: z
    .string()
    .nonempty('Insira um email válido')
    .email('Insira um email válido')
    .refine(async (email) => await checkIfEmailIsValid(email), {
      message: 'Email já cadastrado',
    }),
  CPF: z
    .string()
    .nonempty('Insira um cpf válido')
    .regex(new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/), {
      message: 'Insira um cpf válido',
    })
    .transform((value) => value.replace(/\D/g, '')),
  phoneNumber: z
    .string()
    .nonempty('Insira um telefone celular válido')
    .regex(new RegExp(/^\([1-9]{2}\) 9[0-9]{4}\-[0-9]{4}$/), {
      message: 'Insira um telefone celular válido',
    })
    .transform((value) => value.replace(/\D/g, '')),
  CND: z.string().nonempty('Insira um CND válido'),
})
