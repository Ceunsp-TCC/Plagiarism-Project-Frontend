import { renderHook } from '@testing-library/react'
import { useOrtographicCorrectionTableStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useOrtographicCorrectionTableStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useOrtographicCorrectionTableStore())

    expect(result.current.currentPage).toBeDefined()
    expect(result.current.filters).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
    expect(result.current.setFilters).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
  })

  it('Should be set current page', () => {
    const { result } = renderHook(() => useOrtographicCorrectionTableStore())

    act(() => {
      result.current.setCurrentPage(2)
    })

    expect(result.current.currentPage).toBe(2)
  })

  it('Should be set filters', () => {
    const { result } = renderHook(() => useOrtographicCorrectionTableStore())

    act(() => {
      result.current.setFilters({ identifier: 'test' })
    })

    expect(result.current.filters.identifier).toBe('test')
  })
})
