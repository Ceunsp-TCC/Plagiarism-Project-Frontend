import FormSchoolAddress from '@/app/(public)/signup/form-school-address/page'
import { render, waitFor, fireEvent, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import mockRouter from 'next-router-mock'
import type { ReactNode } from 'react'

describe('FormSchoolAddress', () => {
  afterEach(cleanup)
  it('Should be render a form school address', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { getByPlaceholderText, getByText } = render(<FormSchoolAddress />, {
      wrapper,
    })

    const schoolCepInput = getByPlaceholderText('CEP')

    const schoolComplementInput = getByPlaceholderText('Complemento')
    const schoolNumberInput = getByPlaceholderText('Número')
    const nextStepButton = getByText('Avançar')
    const backStepButton = getByText('Voltar')

    expect(schoolCepInput).toBeInTheDocument()
    expect(schoolComplementInput).toBeInTheDocument()
    expect(schoolNumberInput).toBeInTheDocument()
    expect(nextStepButton).toBeInTheDocument()
    expect(backStepButton).toBeInTheDocument()
  })

  it('Should be validation in fields if is empty ', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { getByText } = render(<FormSchoolAddress />, {
      wrapper,
    })

    const nextStepButton = getByText('Avançar')

    act(() => {
      userEvent.click(nextStepButton)
    })
    await waitFor(() => {
      const errorMessageSchoolCep = getByText(
        'Por favor, insira o cep da escola',
      )

      expect(errorMessageSchoolCep).toBeVisible()
    })
  })
  it('Should be CEP is invalid ', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { getByText, getByPlaceholderText } = render(<FormSchoolAddress />, {
      wrapper,
    })
    const schoolCepInput = getByPlaceholderText('CEP')
    const nextStepButton = getByText('Avançar')

    act(() => {
      fireEvent.change(schoolCepInput, { target: { value: '1233' } })
      userEvent.click(nextStepButton)
    })

    await waitFor(() => {
      const errorMessageSchoolCEP = getByText('Por favor, insira um CEP válido')
      expect(errorMessageSchoolCEP).toBeVisible()
    })
  })

  it('Should be navigate to back', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { getByText } = render(<FormSchoolAddress />, {
      wrapper,
    })

    const backStepButton = getByText('Voltar')
    mockRouter.push('/signup/form-school-address')

    act(() => {
      fireEvent.click(backStepButton)
    })

    await waitFor(() => {
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/signup/form-school')
    })
  })
})
