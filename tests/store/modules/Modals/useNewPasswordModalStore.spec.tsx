import { renderHook } from '@testing-library/react'
import { useNewPasswordModalStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useNewPasswordModalStore ', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useNewPasswordModalStore())

    expect(result.current.isOpenModalNewPassword).toBeDefined()
    expect(result.current.title).toBeDefined()
    expect(result.current.description).toBeDefined()
    expect(result.current.userId).toBeDefined()
    expect(result.current.setOpenModalNewPassword).toBeDefined()
    expect(result.current.setCloseModalNewPassword).toBeDefined()
  })
  it('Should be set state modal', () => {
    const { result } = renderHook(() => useNewPasswordModalStore())

    act(() => {
      result.current.setOpenModalNewPassword({
        title: 'title-test',
        description: 'description-test',
        userId: 1,
      })
    })

    expect(result.current.title).toBe('title-test')
    expect(result.current.description).toBe('description-test')
    expect(result.current.buttonLabel).toBe('Trocar senha')
    expect(result.current.userId).toBe(1)
  })
  it('Should be clear state modal', () => {
    const { result } = renderHook(() => useNewPasswordModalStore())

    act(() => {
      result.current.setCloseModalNewPassword()
    })

    expect(result.current.title).toBe('')
  })
})
