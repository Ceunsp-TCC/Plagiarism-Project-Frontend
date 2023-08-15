import { renderHook } from '@testing-library/react'
import { useStudentsStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useStudentsStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useStudentsStore())

    expect(result.current.isOpenModalNewStudent).toBeDefined()
    expect(result.current.currentPage).toBeDefined()
    expect(result.current.filters).toBeDefined()
    expect(result.current.setIsOpenModalNewStudent).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
    expect(result.current.setFilters).toBeDefined()
  })
  it('Should be set open modal new student', () => {
    const { result } = renderHook(() => useStudentsStore())

    act(() => {
      result.current.setIsOpenModalNewStudent(true)
    })

    expect(result.current.isOpenModalNewStudent).toBe(true)
  })
  it('Should be set current page', () => {
    const { result } = renderHook(() => useStudentsStore())

    act(() => {
      result.current.setCurrentPage(2)
    })

    expect(result.current.currentPage).toBe(2)
  })
  it('Should be set filters', () => {
    const { result } = renderHook(() => useStudentsStore())

    act(() => {
      result.current.setFilters({ name: 'test' })
    })

    expect(result.current.filters.name).toBe('test')
  })
})
