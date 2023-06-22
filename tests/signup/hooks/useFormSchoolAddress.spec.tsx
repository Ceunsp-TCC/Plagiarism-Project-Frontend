import { renderHook, waitFor } from '@testing-library/react'
import { useFormSchoolAddress } from '@/app/(public)/signup/hooks'
import { faker } from '@faker-js/faker'
import { act } from 'react-dom/test-utils'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import mockRouter from 'next-router-mock'
import { useSignupStore } from '@/store'

const schoolCepMock = faker.location.zipCode()
const schoolComplementMock = faker.location.country()
const schoolNumberMock = faker.location.buildingNumber()

describe('useFormSchoolAddress', () => {
  it('Should return correct properties', () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => useFormSchoolAddress(), {
      wrapper,
    })

    expect(result.current.errors).toBeDefined()
    expect(result.current.register).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.handleNavigate).toBeDefined()
  })

  it('Should call onSubmit with data when is submitted', async () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { result: resultSignUpStore } = renderHook(() => useSignupStore())
    const { result } = renderHook(() => useFormSchoolAddress(), {
      wrapper,
    })
    resultSignUpStore.current.setStepState('FORMSCHOOLADDRESS')
    mockRouter.push('/signup/form-school-address')

    const mockData = {
      CEP: schoolCepMock,
      number: schoolNumberMock,
      complement: schoolComplementMock,
    }
    act(() => {
      result.current.onSubmit(mockData)
    })

    await waitFor(() => {
      expect(resultSignUpStore.current.step).toBe('FORMSCHOOLCREDENTIALS')
      expect(resultSignUpStore.current.payload.address).toBe(mockData)
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/signup/form-school-credentials')
    })
  })
})
