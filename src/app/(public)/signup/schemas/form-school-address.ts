/* eslint-disable prefer-regex-literals */
/* eslint-disable no-useless-escape */
import { z } from 'zod'

export const formSchoolAddressSchema = z.object({
  CEP: z
    .string()
    .nonempty('Por favor, insira o cep da escola')
    .regex(/\b\d{5}-?\d{3}\b/, 'Por favor, insira um CEP válido')
    .transform((value) => value.replace(/\D/g, '')),
  number: z.string().optional(),
  complement: z.string().optional(),
})
