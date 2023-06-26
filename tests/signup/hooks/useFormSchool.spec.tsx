import { renderHook, waitFor } from '@testing-library/react'
import { useFormSchool } from '@/app/(public)/signup/hooks'
import { useSignupStore } from '@/store'
import { faker } from '@faker-js/faker'
import { act } from 'react-dom/test-utils'
import mockRouter from 'next-router-mock'

const schoolNameMock = faker.company.name()
const schoolEmailMock = faker.internet.email()
const schoolPhoneNumberMock = faker.phone.number('119########')
const schoolCNPJMock = faker.string.numeric(14)

describe('useFormSchool', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useFormSchool())

    expect(result.current.errors).toBeDefined()
    expect(result.current.register).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.isSubmitting).toBeDefined()
  })

  it('Should call onSubmit with data when is submitted', async () => {
    const { result: resultSignUpStore } = renderHook(() => useSignupStore())
    const { result } = renderHook(() => useFormSchool())

    const mockData = {
      name: schoolNameMock,
      email: schoolEmailMock,
      phoneNumber: schoolPhoneNumberMock,
      CNPJ: schoolCNPJMock,
    }
    mockRouter.push('/signup/form-school')

    act(() => {
      result.current.onSubmit(mockData)
    })

    await waitFor(() => {
      expect(resultSignUpStore.current.step).toBe('FORMSCHOOLADDRESS')
      expect(resultSignUpStore.current.payload.school).toBe(mockData)
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/signup/form-school-address')
    })
  })
})
