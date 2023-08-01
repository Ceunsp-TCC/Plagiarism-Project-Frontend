import { renderHook } from '@testing-library/react'
import { useRandomPasswordModalStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useRandomPasswordModalStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useRandomPasswordModalStore())

    expect(result.current.randomPassword).toBeDefined()
    expect(result.current.buttonLabel).toBeDefined()
    expect(result.current.description).toBeDefined()
    expect(result.current.isOpenModalRandomPassword).toBeDefined()
    expect(result.current.title).toBeDefined()
    expect(result.current.onClickButton).toBeDefined()
    expect(result.current.setCloseModalRandomPassword).toBeDefined()
    expect(result.current.setOpenModalRandomPassword).toBeDefined()
  })
  it('Should be set state modal', () => {
    const { result } = renderHook(() => useRandomPasswordModalStore())

    act(() => {
      result.current.setOpenModalRandomPassword({
        title: 'title-test',
        description: 'description-test',
        randomPassword: 'test-password',
      })
    })

    expect(result.current.title).toBe('title-test')
    expect(result.current.description).toBe('description-test')
    expect(result.current.buttonLabel).toBe('Entendi')
    expect(result.current.randomPassword).toBe('test-password')
  })
  it('Should be clear state modal', () => {
    const { result } = renderHook(() => useRandomPasswordModalStore())

    act(() => {
      result.current.setCloseModalRandomPassword()
    })

    expect(result.current.title).toBe('')
  })
})
