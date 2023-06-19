import FormSchool from '@/app/(public)/signup/form-school/page'
import { render, waitFor, fireEvent, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import React from 'react'
import { act } from 'react-dom/test-utils'

jest.mock('next/navigation', () => require('next-router-mock'))

describe('FormSchool', () => {
  afterEach(cleanup)
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
  it('Should be validation in fields if is empty ', async () => {
    const { getByText } = render(<FormSchool />)

    const nextStepButton = getByText('Avançar')

    act(() => {
      userEvent.click(nextStepButton)
    })
    await waitFor(() => {
      const errorMessageSchoolName = getByText(
        'Por favor, insira o nome da escola',
      )
      const errorMessageSchoolEmail = getByText(
        'Por favor, insira o email da escola',
      )
      const errorMessageSchoolPhoneNumber = getByText(
        'Por favor, insira o telefone da escola',
      )
      expect(errorMessageSchoolName).toBeVisible()
      expect(errorMessageSchoolEmail).toBeVisible()
      expect(errorMessageSchoolPhoneNumber).toBeVisible()
    })
  })
  it('Should be email is invalid ', async () => {
    const { getByText, getByPlaceholderText } = render(<FormSchool />)
    const schoolEmailInput = getByPlaceholderText('Email')
    const nextStepButton = getByText('Avançar')

    act(() => {
      fireEvent.change(schoolEmailInput, { target: { value: 'test' } })
      userEvent.click(nextStepButton)
    })

    await waitFor(() => {
      const errorMessageSchoolEmail = getByText(
        'Por favor, insira um email válido',
      )
      expect(errorMessageSchoolEmail).toBeVisible()
    })
  })
  it('Should be validation phone number is invalid ', async () => {
    const { getByText, getByPlaceholderText } = render(<FormSchool />)
    const schoolPhoneNumberInput = getByPlaceholderText('Número de telefone')
    const nextStepButton = getByText('Avançar')

    act(() => {
      fireEvent.change(schoolPhoneNumberInput, {
        target: { value: 'test' },
      })
      userEvent.click(nextStepButton)
    })

    await waitFor(() => {
      const errorMessageSchoolPhoneNumber = getByText(
        'Por favor, insira um telefone válido',
      )
      expect(errorMessageSchoolPhoneNumber).toBeVisible()
    })
  })
})
