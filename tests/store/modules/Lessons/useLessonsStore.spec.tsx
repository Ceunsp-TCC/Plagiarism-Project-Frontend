import { renderHook } from '@testing-library/react'
import { useLessonsStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useLessonsStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useLessonsStore())

    expect(result.current.currentPage).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
  })

  it('Should be set current page', () => {
    const { result } = renderHook(() => useLessonsStore())

    act(() => {
      result.current.setCurrentPage(2)
    })

    expect(result.current.currentPage).toBe(2)
  })
})
