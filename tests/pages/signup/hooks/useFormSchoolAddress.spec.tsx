import { renderHook, waitFor } from '@testing-library/react'
import { useFormSchoolAddress } from '@/app/(public)/signup/hooks'
import { faker } from '@faker-js/faker'
import { act } from 'react-dom/test-utils'

const schoolCepMock = faker.location.zipCode()
const schoolComplementMock = faker.location.country()
const schoolNumberMock = faker.location.buildingNumber()

describe('useFormSchoolAddress', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useFormSchoolAddress())

    expect(result.current.errors).toBeDefined()
    expect(result.current.isSubmitting).toBeDefined()
    expect(result.current.register).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
  })

  it('Should call onSubmit with data when is submitted', async () => {
    const { result } = renderHook(() => useFormSchoolAddress())

    const mockData = {
      CEP: schoolCepMock,
      number: schoolNumberMock,
      complement: schoolComplementMock,
    }
    const mockOnSubmit = jest.spyOn(result.current, 'onSubmit')
    act(() => {
      result.current.onSubmit(mockData)
    })

    await waitFor(() => {
      expect(mockOnSubmit).toBeCalled()
      expect(mockOnSubmit).toBeCalledWith(mockData)
    })
  })
})
