const errors = {
  'Ortography correction with this identifier already registered':
    'Já existe um identificador como este, digite outro por favor!',
  'Invalid language':
    'No momento só aceitamos textos na língua inglesa, em breve aceitaremos na língua portuguesa!',
}

export type CreateOrtographyError = keyof typeof errors
export const newCorrectionErrorMessageAdapter = (
  message: CreateOrtographyError,
) => {
  return errors[
    message || 'Ocorreu um erro, por favor tente novamente mais tarde'
  ]
}
