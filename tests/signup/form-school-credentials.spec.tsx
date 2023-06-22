import FormSchoolCredentials from '@/app/(public)/signup/form-school-credentials/page'
import {
  render,
  waitFor,
  fireEvent,
  cleanup,
  renderHook,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'
import mockRouter from 'next-router-mock'
import { useSignupStore } from '@/store'

describe('FormSchoolCredentials', () => {
  afterEach(cleanup)
  it('Should be render a form school credentials', async () => {
    const { getByPlaceholderText, getByText } = render(
      <FormSchoolCredentials />,
    )
    const description = getByText('Agora preencha uma senha de acesso')
    const schoolPasswordInput = getByPlaceholderText('Digite uma senha')
    const schoolConfirmPasswordInput =
      getByPlaceholderText('Confirme sua senha')
    const confirmButton = getByText('Confirmar')

    expect(schoolPasswordInput).toBeInTheDocument()
    expect(schoolConfirmPasswordInput).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(confirmButton).toBeInTheDocument()
  })
  it('Should be submit form with success', async () => {
    const { result } = renderHook(() => useSignupStore())
    const { getByPlaceholderText, getByText } = render(
      <FormSchoolCredentials />,
    )

    const mockData = {
      password: 'Alpha@12',
      confirmPassword: 'Alpha@12',
    }
    const schoolPasswordInput = getByPlaceholderText('Digite uma senha')
    const schoolConfirmPasswordInput =
      getByPlaceholderText('Confirme sua senha')

    const confirmButton = getByText('Confirmar')
    mockRouter.push('/signup/form-school-credentials')

    act(() => {
      fireEvent.change(schoolPasswordInput, {
        target: { value: mockData.password },
      })
      fireEvent.change(schoolConfirmPasswordInput, {
        target: { value: mockData.confirmPassword },
      })

      userEvent.click(confirmButton)
    })

    await waitFor(() => {
      expect(result.current.step).toBe('WARNINGACCOUNTINREVIEW')
      expect(result.current.payload.credentials).toStrictEqual(mockData)
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/signup/warning-account-in-review')
    })
  })
  it('Should be validation in fields if is empty', async () => {
    const { getByText } = render(<FormSchoolCredentials />)

    const confirmButton = getByText('Confirmar')

    act(() => {
      userEvent.click(confirmButton)
    })
    await waitFor(() => {
      const errorMessageSchoolPassword = getByText(
        'Por favor, insira uma senha',
      )
      const errorMessageSchoolConfirmPassword = getByText(
        'Por favor, confirme a senha',
      )

      expect(errorMessageSchoolPassword).toBeVisible()
      expect(errorMessageSchoolConfirmPassword).toBeVisible()
    })
  })
  it('Should be is invalid password format', async () => {
    const { getByText, getByPlaceholderText } = render(
      <FormSchoolCredentials />,
    )
    const schoolPasswordInput = getByPlaceholderText('Digite uma senha')
    const confirmButton = getByText('Confirmar')

    act(() => {
      fireEvent.change(schoolPasswordInput, { target: { value: 'ddddd' } })
      userEvent.click(confirmButton)
    })
    await waitFor(() => {
      const errorMessageSchoolPassword = getByText(
        'A senha deve conter pelo menos 1 letra maiúscula, minúscula, 1 número, 1 caractere especial (@, #, $) e ter no mínimo 8 caracteres.',
      )

      expect(errorMessageSchoolPassword).toBeVisible()
    })
  })
  it('Should be password and confirm is different', async () => {
    const { getByText, getByPlaceholderText } = render(
      <FormSchoolCredentials />,
    )
    const schoolPasswordInput = getByPlaceholderText('Digite uma senha')
    const schoolConfirmPasswordInput =
      getByPlaceholderText('Confirme sua senha')
    const confirmButton = getByText('Confirmar')

    act(() => {
      fireEvent.change(schoolPasswordInput, { target: { value: 'ddddd' } })
      fireEvent.change(schoolConfirmPasswordInput, {
        target: { value: 'ddddd2' },
      })
      userEvent.click(confirmButton)
    })
    await waitFor(() => {
      const errorMessageConfirmPassword = getByText('As senhas são diferentes')

      expect(errorMessageConfirmPassword).toBeVisible()
    })
  })
  it('Should be redirect if step is wrong', async () => {
    const { result } = renderHook(() => useSignupStore())
    render(<FormSchoolCredentials />)
    result.current.setStepState('FORMSCHOOL')
    mockRouter.push('/signup/form-school-credentials')

    await waitFor(() => {
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/signup/form-school')
    })
  })
})
