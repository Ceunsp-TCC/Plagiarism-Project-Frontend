import FormSchool from '@/app/(public)/signup/form-school/page'
import { render } from '@testing-library/react'
import React from 'react'

describe('FormSchool', () => {
  it('Should be render a form school', async () => {
    const { getByPlaceholderText, getByText } = render(<FormSchool />)

    const schoolNameInput = getByPlaceholderText('Nome')
    const schoolEmailInput = getByPlaceholderText('Email')
    const schoolPhoneNumberInput = getByPlaceholderText('Número de telefone')
    const nextStepButton = getByText('Avançar')
    const backStepButton = getByText('Voltar')

    expect(schoolNameInput).toBeInTheDocument()
    expect(schoolEmailInput).toBeInTheDocument()
    expect(schoolPhoneNumberInput).toBeInTheDocument()
    expect(nextStepButton).toBeInTheDocument()
    expect(backStepButton).toBeInTheDocument()
  })
})
