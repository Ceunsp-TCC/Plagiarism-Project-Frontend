import { renderHook } from '@testing-library/react'
import { useAcademicPaperTableStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useAcademicPaperTableStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useAcademicPaperTableStore())

    expect(result.current.currentPage).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
  })

  it('Should be set current page', () => {
    const { result } = renderHook(() => useAcademicPaperTableStore())

    act(() => {
      result.current.setCurrentPage(2)
    })

    expect(result.current.currentPage).toBe(2)
  })
})
