import { renderHook } from '@testing-library/react'
import { useFormSchoolCredentials } from '@/app/(public)/signup/hooks'
import { act } from 'react-dom/test-utils'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const schoolPasswordMock = 'Alpha@12'

describe('useFormSchoolCredentials', () => {
  it('Should return correct properties', () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { result } = renderHook(() => useFormSchoolCredentials(), {
      wrapper,
    })

    expect(result.current.errors).toBeDefined()
    expect(result.current.register).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.handleNavigate).toBeDefined()
  })

  it('Should call onSubmit with data when is submitted', () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { result } = renderHook(() => useFormSchoolCredentials(), {
      wrapper,
    })
    const mockConsoleLog = jest.spyOn(console, 'log')

    const mockData = {
      password: schoolPasswordMock,
      confirmPassword: schoolPasswordMock,
    }
    act(() => {
      result.current.onSubmit(mockData)
    })

    expect(mockConsoleLog).toHaveBeenCalledWith('fields', mockData)

    mockConsoleLog.mockReset()
    mockConsoleLog.mockRestore()
  })
})
