import FormSchool from '@/app/(public)/signup/form-school/page'
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
import { faker } from '@faker-js/faker'

const schoolNameMock = faker.company.name()
const schoolEmailMock = faker.internet.email()
const schoolPhoneNumberMock = faker.phone.number('119########')
const schoolCNPJMock = faker.string.numeric(14)
describe('FormSchool', () => {
  afterEach(cleanup)
  it('Should be render a form school', async () => {
    const { getByPlaceholderText, getByText } = render(<FormSchool />)

    const description = getByText(
      'Primeiro precisamos de algumas informações da sua escola',
    )
    const schoolNameInput = getByPlaceholderText('Nome')
    const schoolEmailInput = getByPlaceholderText('Email')
    const schoolPhoneNumberInput = getByPlaceholderText('Número de telefone')
    const schoolCNPJInput = getByPlaceholderText('CNPJ')
    const nextStepButton = getByText('Avançar')

    expect(schoolNameInput).toBeInTheDocument()
    expect(schoolEmailInput).toBeInTheDocument()
    expect(schoolPhoneNumberInput).toBeInTheDocument()
    expect(schoolCNPJInput).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(nextStepButton).toBeInTheDocument()
  })
  it('Should be submit form with success', async () => {
    const { result } = renderHook(() => useSignupStore())
    const { getByPlaceholderText, getByText } = render(<FormSchool />)

    const mockData = {
      name: schoolNameMock,
      email: schoolEmailMock,
      phoneNumber: schoolPhoneNumberMock,
      CNPJ: schoolCNPJMock,
    }
    const schoolNameInput = getByPlaceholderText('Nome')
    const schoolEmailInput = getByPlaceholderText('Email')
    const schoolPhoneNumberInput = getByPlaceholderText('Número de telefone')
    const schoolCNPJInput = getByPlaceholderText('CNPJ')
    const nextStepButton = getByText('Avançar')
    mockRouter.push('/signup/form-school')

    act(() => {
      fireEvent.change(schoolNameInput, {
        target: { value: mockData.name },
      })
      fireEvent.change(schoolEmailInput, {
        target: { value: mockData.email },
      })
      fireEvent.change(schoolPhoneNumberInput, {
        target: { value: mockData.phoneNumber },
      })
      fireEvent.change(schoolCNPJInput, {
        target: { value: mockData.CNPJ },
      })
      userEvent.click(nextStepButton)
    })

    await waitFor(() => {
      expect(result.current.step).toBe('FORMSCHOOLADDRESS')
      expect(result.current.payload.school).toStrictEqual(mockData)
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/signup/form-school-address')
    })
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
      const errorMessageSchoolCNPJ = getByText(
        'Por favor, insira o cnpj da escola',
      )
      expect(errorMessageSchoolName).toBeVisible()
      expect(errorMessageSchoolEmail).toBeVisible()
      expect(errorMessageSchoolPhoneNumber).toBeVisible()
      expect(errorMessageSchoolCNPJ).toBeVisible()
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
  it('Should be cnpj is invalid ', async () => {
    const { getByText, getByPlaceholderText } = render(<FormSchool />)
    const schoolCPJInput = getByPlaceholderText('CNPJ')
    const nextStepButton = getByText('Avançar')

    act(() => {
      fireEvent.change(schoolCPJInput, { target: { value: '2333' } })
      userEvent.click(nextStepButton)
    })

    await waitFor(() => {
      const errorMessageSchoolCNPJ = getByText(
        'Por favor, insira um cnpj válido',
      )
      expect(errorMessageSchoolCNPJ).toBeVisible()
    })
  })
  it('Should be validation phone number is invalid ', async () => {
    const { getByText, getByPlaceholderText } = render(<FormSchool />)
    const schoolPhoneNumberInput = getByPlaceholderText('Número de telefone')
    const nextStepButton = getByText('Avançar')

    act(() => {
      fireEvent.change(schoolPhoneNumberInput, {
        target: { value: '2222' },
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
