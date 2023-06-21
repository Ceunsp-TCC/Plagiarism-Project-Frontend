import { renderHook } from '@testing-library/react'
import { useSignupStore } from '@/store/modules/Signup'
import { act } from 'react-dom/test-utils'

const schoolNewState = {
  CNPJ: '123323',
  email: 'schoolguardian@school.com',
  name: 'school',
  phoneNumber: '11######',
}
const schoolAddressNewState = {
  CEP: '10003344',
  complement: 'teste',
  number: '102',
}
const schoolCredentialsNewState = {
  password: '10003344',
  confirmPassword: '10003344',
}

describe('useSignupStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useSignupStore())

    expect(result.current.payload).toBeDefined()
    expect(result.current.step).toBeDefined()
    expect(result.current.setSchoolAddressState).toBeDefined()
    expect(result.current.setSchoolState).toBeDefined()
    expect(result.current.setSchoolCredentialsState).toBeDefined()
    expect(result.current.setSchoolState).toBeDefined()
    expect(result.current.setStepState).toBeDefined()
  })

  it('Should be set step', () => {
    const { result } = renderHook(() => useSignupStore())

    act(() => {
      result.current.setStepState('FORMSCHOOLADDRESS')
    })

    expect(result.current.step).toBe('FORMSCHOOLADDRESS')
  })
  it('Should be  set school', () => {
    const { result } = renderHook(() => useSignupStore())

    act(() => {
      result.current.setSchoolState(schoolNewState)
    })

    expect(result.current.payload.school).toBe(schoolNewState)
  })
  it('Should be set address', () => {
    const { result } = renderHook(() => useSignupStore())

    act(() => {
      result.current.setSchoolAddressState(schoolAddressNewState)
    })

    expect(result.current.payload.address).toBe(schoolAddressNewState)
  })
  it('Should be set credentials', () => {
    const { result } = renderHook(() => useSignupStore())

    act(() => {
      result.current.setSchoolCredentialsState(schoolCredentialsNewState)
    })

    expect(result.current.payload.credentials).toBe(schoolCredentialsNewState)
  })
  it('Should be set all payload', () => {
    const { result } = renderHook(() => useSignupStore())

    const payload = {
      school: schoolNewState,
      address: schoolAddressNewState,
      credentials: schoolCredentialsNewState,
    }

    act(() => {
      result.current.setSchoolState(schoolNewState)
      result.current.setSchoolAddressState(schoolAddressNewState)
      result.current.setSchoolCredentialsState(schoolCredentialsNewState)
    })

    expect(result.current.payload).toStrictEqual(payload)
  })
})
