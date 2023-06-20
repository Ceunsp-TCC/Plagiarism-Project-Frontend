/* eslint-disable prefer-regex-literals */
/* eslint-disable no-useless-escape */
import { z } from 'zod'

export const formSchoolAddressSchema = z.object({
  CEP: z
    .string()
    .nonempty('Por favor, insira o cep da escola')
    .regex(/\b\d{5}-?\d{3}\b/, 'Por favor, insira um CEP válido')
    .transform((value) => value.replace(/\D/g, '')),
  street: z.string().nonempty('Por favor, insira a rua da escola'),
  number: z.string().optional(),
  complement: z.string().optional(),
  district: z.string().nonempty('Por favor, insira o bairro da escola'),
  city: z.string().nonempty('Por favor, insira a cidade da escola'),
  state: z.string().nonempty('Por favor, insira o estado da escola'),
})
