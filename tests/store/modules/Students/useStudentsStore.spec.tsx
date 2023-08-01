import { renderHook } from '@testing-library/react'
import { useStudentsStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useStudentsStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useStudentsStore())

    expect(result.current.isOpenModalNewStudent).toBeDefined()
    expect(result.current.setIsOpenModalNewStudent).toBeDefined()
  })
  it('Should be set open modal new student', () => {
    const { result } = renderHook(() => useStudentsStore())

    act(() => {
      result.current.setIsOpenModalNewStudent(true)
    })

    expect(result.current.isOpenModalNewStudent).toBe(true)
  })
})
