/* eslint-disable no-useless-escape */
/* eslint-disable prefer-regex-literals */
import z from 'zod'

export const formSchoolCredentialsSchema = z
  .object({
    password: z
      .string()
      .nonempty('Por favor, insira uma senha')

      .regex(
        new RegExp(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$])[A-Za-z\d@#$]{8,}$/,
        ),
        {
          message:
            'A senha deve conter pelo menos 1 letra maiúscula, minúscula, 1 número, 1 caractere especial (@, #, $) e ter no mínimo 8 caracteres.',
        },
      ),
    confirmPassword: z.string().nonempty('Por favor, confirme a senha'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    const unMatchPassword = confirmPassword !== password

    if (unMatchPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas são diferentes',
        path: ['confirmPassword'],
      })
    }
  })
