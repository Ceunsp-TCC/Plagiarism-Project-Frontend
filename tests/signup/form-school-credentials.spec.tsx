import FormSchoolCredentials from '@/app/(public)/signup/form-school-credentials/page'
import { render, waitFor, fireEvent, renderHook } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import mockRouter from 'next-router-mock'
import { useSignupStore } from '@/store'
import { createSchoolMock } from '@tests/helpers'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
describe('FormSchoolCredentials', () => {
  it('Should be render a form school credentials', async () => {
    const { getByPlaceholderText, getByText } = render(
      <FormSchoolCredentials />,
      { wrapper },
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
    createSchoolMock(200)
    const { result } = renderHook(() => useSignupStore())

    await result.current.setStepState('FORMSCHOOLCREDENTIALS')

    mockRouter.push('/signup/form-school-credentials')

    const { getByPlaceholderText, getByText } = render(
      <FormSchoolCredentials />,
      { wrapper },
    )

    const mockData = {
      password: 'Alpha@12',
      confirmPassword: 'Alpha@12',
    }
    const schoolPasswordInput = getByPlaceholderText('Digite uma senha')
    const schoolConfirmPasswordInput =
      getByPlaceholderText('Confirme sua senha')

    const confirmButton = getByText('Confirmar')

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
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/signup/warning-account-in-review')
    })
  })

  it('Should be validation in fields if is empty', async () => {
    createSchoolMock(400)
    const { getByText } = render(<FormSchoolCredentials />, { wrapper })

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
    createSchoolMock(400)
    const { getByPlaceholderText, getByText } = render(
      <FormSchoolCredentials />,
      { wrapper },
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
    createSchoolMock(400)
    const { getByPlaceholderText, getByText } = render(
      <FormSchoolCredentials />,
      { wrapper },
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
    result.current.setStepState('WARNINGACCOUNTINREVIEW')

    mockRouter.push('/signup/form-school-credentials')

    render(<FormSchoolCredentials />, { wrapper })

    await waitFor(() => {
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/signup/form-school')
    })
  })
})
