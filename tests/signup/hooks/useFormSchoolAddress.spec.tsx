import { renderHook } from '@testing-library/react'
import { useFormSchoolAddress } from '@/app/(public)/signup/hooks'
import { faker } from '@faker-js/faker'
import { act } from 'react-dom/test-utils'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const schoolCepMock = faker.location.zipCode()
const schoolStreetMock = faker.location.street()
const schoolDistrictMock = faker.location.country()
const schoolCityMock = faker.location.city()
const schoolStateMock = faker.location.state({ abbreviated: true })
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
    expect(result.current.handleAutoCompleteAddress).toBeDefined()
  })

  it('Should call onSubmit with data when is submitted', () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { result } = renderHook(() => useFormSchoolAddress(), {
      wrapper,
    })
    const mockConsoleLog = jest.spyOn(console, 'log')

    const mockData = {
      CEP: schoolCepMock,
      street: schoolStreetMock,
      number: schoolNumberMock,
      complement: schoolComplementMock,
      district: schoolDistrictMock,
      city: schoolCityMock,
      state: schoolStateMock,
    }
    act(() => {
      result.current.onSubmit(mockData)
    })

    expect(mockConsoleLog).toHaveBeenCalledWith('fields', mockData)

    mockConsoleLog.mockReset()
    mockConsoleLog.mockRestore()
  })
  it('Should call handleAutoCompleteAddress', () => {
    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
    const { result } = renderHook(() => useFormSchoolAddress(), {
      wrapper,
    })
    const mockHandleAutoCompleteAddress = jest.spyOn(
      result.current,
      'handleAutoCompleteAddress',
    )

    act(() => {
      result.current.handleAutoCompleteAddress()
    })

    expect(mockHandleAutoCompleteAddress).toBeCalled()

    mockHandleAutoCompleteAddress.mockReset()
    mockHandleAutoCompleteAddress.mockRestore()
  })
})
