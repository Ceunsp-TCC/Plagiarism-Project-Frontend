import FormSchoolAddress from '@/app/(public)/signup/form-school-address/page'
import {
  render,
  waitFor,
  fireEvent,
  renderHook,
  cleanup,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'
import mockRouter from 'next-router-mock'
import { useSignupStore } from '@/store'
import { validZipcodeMock } from '@tests/helpers'

const mockData = {
  CEP: '13323389',
  complement: 'ddddd',
  number: '1111',
}

describe('FormSchoolAddress', () => {
  afterEach(cleanup)
  it('Should be render a form school address', async () => {
    const { getByPlaceholderText, getByText } = render(<FormSchoolAddress />)

    const description = getByText('Agora precisamos do endereço')
    const schoolCepInput = getByPlaceholderText('CEP')
    const schoolComplementInput = getByPlaceholderText('Complemento')
    const schoolNumberInput = getByPlaceholderText('Número')
    const nextStepButton = getByText('Avançar')

    expect(schoolCepInput).toBeInTheDocument()
    expect(schoolComplementInput).toBeInTheDocument()
    expect(schoolNumberInput).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(nextStepButton).toBeInTheDocument()
  })

  it('Should be submit form with success', async () => {
    validZipcodeMock(200)
    const { result } = renderHook(() => useSignupStore())
    result.current.setStepState('FORMSCHOOLADDRESS')
    mockRouter.push('/signup/form-school-address')

    const { getByPlaceholderText, getByText } = render(<FormSchoolAddress />)

    const schoolCepInput = getByPlaceholderText('CEP')
    const schoolComplementInput = getByPlaceholderText('Complemento')
    const schoolNumberInput = getByPlaceholderText('Número')
    const nextStepButton = getByText('Avançar')

    await act(async () => {
      fireEvent.change(schoolCepInput, {
        target: { value: mockData.CEP },
      })
      fireEvent.change(schoolComplementInput, {
        target: { value: mockData.complement },
      })
      fireEvent.change(schoolNumberInput, {
        target: { value: mockData.number },
      })

      userEvent.click(nextStepButton)
    })

    await waitFor(() => {
      expect(result.current.step).toBe('FORMSCHOOLCREDENTIALS')
      expect(result.current.payload.address).toStrictEqual(mockData)
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/signup/form-school-credentials')
    })
  })
  it('Should be validation in fields if is empty ', async () => {
    validZipcodeMock(400)
    const { result } = renderHook(() => useSignupStore())
    act(() => {
      result.current.setStepState('FORMSCHOOLADDRESS')
      mockRouter.push('/signup/form-school-address')
    })

    const { getByText, findByText } = render(<FormSchoolAddress />)
    const nextStepButton = getByText('Avançar')

    act(() => {
      fireEvent.click(nextStepButton)
    })

    await waitFor(async () => {
      const errorMessageSchoolCep = await findByText(
        'Por favor, insira o cep da escola',
      )

      expect(errorMessageSchoolCep).toBeVisible()
    })
  })
  it('Should be redirect if step is wrong', async () => {
    const { result } = renderHook(() => useSignupStore())
    render(<FormSchoolAddress />)
    result.current.setStepState('FORMSCHOOL')
    mockRouter.push('/signup/form-school-address')

    await waitFor(() => {
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/signup/form-school')
    })
  })

  it('Should be CEP is invalid ', async () => {
    validZipcodeMock(200)
    const { result } = renderHook(() => useSignupStore())
    act(() => {
      result.current.setStepState('FORMSCHOOLADDRESS')
      mockRouter.push('/signup/form-school-address')
    })

    const { getByText, getByPlaceholderText } = render(<FormSchoolAddress />)
    const schoolCepInput = getByPlaceholderText('CEP')
    const nextStepButton = getByText('Avançar')

    act(() => {
      fireEvent.change(schoolCepInput, { target: { value: '1' } })
      userEvent.click(nextStepButton)
    })

    await waitFor(() => {
      const errorMessageSchoolCEP = getByText('Por favor, insira um CEP válido')
      expect(errorMessageSchoolCEP).toBeVisible()
    })
  })
  it('Should be CEP is invalid by api ', async () => {
    validZipcodeMock(400)
    const { result } = renderHook(() => useSignupStore())
    act(() => {
      result.current.setStepState('FORMSCHOOLADDRESS')
      mockRouter.push('/signup/form-school-address')
    })

    const { getByText, getByPlaceholderText } = render(<FormSchoolAddress />)
    const schoolCepInput = getByPlaceholderText('CEP')
    const nextStepButton = getByText('Avançar')

    act(() => {
      fireEvent.change(schoolCepInput, { target: { value: '13323389' } })
      userEvent.click(nextStepButton)
    })

    await waitFor(() => {
      const errorMessageSchoolCEP = getByText('Por favor, insira um CEP válido')
      expect(errorMessageSchoolCEP).toBeVisible()
    })
  })
})
