import FormSchoolAddress from '@/app/(public)/signup/form-school-address/page'
import { render, waitFor, fireEvent, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import mockRouter from 'next-router-mock'
import type { ReactNode } from 'react'
import nock from 'nock'

const schoolCepMock = '01001000'
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
    const schoolStreetInput = getByPlaceholderText('Rua')
    const schoolDistrictInput = getByPlaceholderText('Bairro')
    const schoolCityInput = getByPlaceholderText('Cidade')
    const schoolStateInput = getByPlaceholderText('Estado')
    const schoolComplementInput = getByPlaceholderText('Complemento')
    const schoolNumberInput = getByPlaceholderText('Número')
    const nextStepButton = getByText('Avançar')
    const backStepButton = getByText('Voltar')

    expect(schoolCepInput).toBeInTheDocument()
    expect(schoolDistrictInput).toBeInTheDocument()
    expect(schoolStreetInput).toBeInTheDocument()
    expect(schoolCityInput).toBeInTheDocument()
    expect(schoolStateInput).toBeInTheDocument()
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
      const errorMessageSchoolStreet = getByText(
        'Por favor, insira a rua da escola',
      )
      const errorMessageSchoolDistrict = getByText(
        'Por favor, insira o bairro da escola',
      )
      const errorMessageSchoolCity = getByText(
        'Por favor, insira a cidade da escola',
      )

      const errorMessageSchoolState = getByText(
        'Por favor, insira o estado da escola',
      )

      expect(errorMessageSchoolCep).toBeVisible()
      expect(errorMessageSchoolDistrict).toBeVisible()
      expect(errorMessageSchoolStreet).toBeVisible()
      expect(errorMessageSchoolState).toBeVisible()
      expect(errorMessageSchoolCity).toBeVisible()
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
  it('Should be readonly inputs', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { getByPlaceholderText } = render(<FormSchoolAddress />, {
      wrapper,
    })

    const schoolStreetInput = getByPlaceholderText('Rua')
    const schoolDistrictInput = getByPlaceholderText('Bairro')
    const schoolCityInput = getByPlaceholderText('Cidade')
    const schoolStateInput = getByPlaceholderText('Estado')

    expect(schoolStreetInput).toHaveAttribute('readOnly')
    expect(schoolDistrictInput).toHaveAttribute('readOnly')
    expect(schoolCityInput).toHaveAttribute('readOnly')
    expect(schoolStateInput).toHaveAttribute('readOnly')
  })
  it('Should be auto complete fields by cep', async () => {
    const scope = nock(process.env.NEXT_PUBLIC_VIA_CEP)
      .get(`/ws/${schoolCepMock}/json/`)
      .reply(200, {
        cep: '01001-000',
        logradouro: 'Praça da Sé',
        complemento: 'lado ímpar',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        ibge: '3550308',
        gia: '1004',
        ddd: '11',
        siafi: '7107',
      })
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { getByPlaceholderText, findByPlaceholderText } = render(
      <FormSchoolAddress />,
      {
        wrapper,
      },
    )
    const schoolCepInput = getByPlaceholderText('CEP')

    act(() => {
      fireEvent.change(schoolCepInput, { target: { value: schoolCepMock } })
      fireEvent.blur(schoolCepInput)
    })

    await waitFor(async () => {
      const streetValue = await findByPlaceholderText('Rua')
      const districtValue = await findByPlaceholderText('Bairro')
      const cityValue = await findByPlaceholderText('Cidade')
      const stateValue = await findByPlaceholderText('Estado')
      expect(streetValue).toHaveValue('Praça da Sé')
      expect(districtValue).toHaveValue('Sé')
      expect(cityValue).toHaveValue('São Paulo')
      expect(stateValue).toHaveValue('SP')
    })
    scope.done()
  })
  it('Should be invalid cep by api', async () => {
    nock(process.env.NEXT_PUBLIC_VIA_CEP)
      .get(`/ws/${schoolCepMock}/json/`)
      .reply(200, {
        erro: true,
      })
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true',
      })
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { getByPlaceholderText, findByText } = render(<FormSchoolAddress />, {
      wrapper,
    })
    const schoolCepInput = getByPlaceholderText('CEP')

    act(() => {
      fireEvent.change(schoolCepInput, { target: { value: '12222233' } })
      fireEvent.blur(schoolCepInput)
    })

    await waitFor(async () => {
      const errorMessageSchoolCEP = await findByText(
        'Por favor, insira um CEP válido',
      )

      expect(errorMessageSchoolCEP).toBeVisible()
    })
  })
})
