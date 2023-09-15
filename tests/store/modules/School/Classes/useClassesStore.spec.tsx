import { renderHook } from '@testing-library/react'
import { useClassesStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useClassesStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useClassesStore())

    expect(result.current.currentPage).toBeDefined()
    expect(result.current.filters).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
    expect(result.current.setFilters).toBeDefined()
  })

  it('Should be set current page', () => {
    const { result } = renderHook(() => useClassesStore())

    act(() => {
      result.current.setCurrentPage(2)
    })

    expect(result.current.currentPage).toBe(2)
  })
  it('Should be set filters', () => {
    const { result } = renderHook(() => useClassesStore())

    act(() => {
      result.current.setFilters({ name: 'test' })
    })

    expect(result.current.filters.name).toBe('test')
  })
})
