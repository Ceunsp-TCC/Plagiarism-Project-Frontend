import { renderHook, waitFor } from '@testing-library/react'
import { useFormSchoolCredentials } from '@/app/(public)/signup/hooks'
import { act } from 'react-dom/test-utils'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { useSignupStore } from '@/store'
import mockRouter from 'next-router-mock'

const schoolPasswordMock = 'Alpha@12'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useFormSchoolCredentials', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useFormSchoolCredentials(), {
      wrapper,
    })

    expect(result.current.errors).toBeDefined()
    expect(result.current.register).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.isLoading).toBeDefined()
  })

  it('Should call onSubmit with data when is submitted', async () => {
    const { result: resultSignUpStore } = renderHook(() => useSignupStore())
    resultSignUpStore.current.setStepState('FORMSCHOOLCREDENTIALS')
    const { result } = renderHook(() => useFormSchoolCredentials(), {
      wrapper,
    })
    act(() => {
      resultSignUpStore.current.setStepState('FORMSCHOOLCREDENTIALS')
      mockRouter.push('/signup/form-school-credentials')
    })
    const mockHandleSubmit = jest.spyOn(result.current, 'handleSubmit')

    const mockData = {
      password: schoolPasswordMock,
      confirmPassword: schoolPasswordMock,
    }
    act(() => {
      result.current.handleSubmit(result.current.onSubmit(mockData) as any)
    })

    await waitFor(() => {
      expect(mockHandleSubmit).toBeCalledTimes(1)
    })
  })
})
