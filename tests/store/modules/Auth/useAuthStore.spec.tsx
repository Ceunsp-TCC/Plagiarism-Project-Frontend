import { renderHook } from '@testing-library/react'
import { useAuthStore } from '@store'
import { act } from 'react-dom/test-utils'
import { mockUserSchoolState } from '@tests/helpers'

describe('useAuthStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useAuthStore())

    expect(result.current.data).toBeDefined()
    expect(result.current.setUserState).toBeDefined()
    expect(result.current.clearState).toBeDefined()
  })
  it('Should be set user state', () => {
    const { result } = renderHook(() => useAuthStore())

    act(() => {
      result.current.setUserState(mockUserSchoolState as any)
    })

    expect(result.current.data).toBe(mockUserSchoolState)
  })
  it('Should be set user state in session storage', () => {
    const { result } = renderHook(() => useAuthStore())

    act(() => {
      result.current.setUserState(mockUserSchoolState as any)
    })

    const userInLocalStorage = localStorage.getItem('auth-school-guardian')

    expect(userInLocalStorage).toEqual(expect.anything())
  })
  it('Should be clear state', () => {
    const { result } = renderHook(() => useAuthStore())

    act(() => {
      result.current.clearState()
    })

    expect(result.current.data.accessToken.token).toBe('')
  })
})
