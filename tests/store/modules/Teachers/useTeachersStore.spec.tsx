import { renderHook } from '@testing-library/react'
import { useTeachersStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useTeachersStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useTeachersStore())

    expect(result.current.isOpenModalNewTeacher).toBeDefined()
    expect(result.current.currentPage).toBeDefined()
    expect(result.current.filters).toBeDefined()
    expect(result.current.setIsOpenModalNewTeacher).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
    expect(result.current.setFilters).toBeDefined()
  })
  it('Should be set open modal new teacher', () => {
    const { result } = renderHook(() => useTeachersStore())

    act(() => {
      result.current.setIsOpenModalNewTeacher(true)
    })

    expect(result.current.isOpenModalNewTeacher).toBe(true)
  })
  it('Should be set current page', () => {
    const { result } = renderHook(() => useTeachersStore())

    act(() => {
      result.current.setCurrentPage(2)
    })

    expect(result.current.currentPage).toBe(2)
  })
  it('Should be set filters', () => {
    const { result } = renderHook(() => useTeachersStore())

    act(() => {
      result.current.setFilters({ name: 'test' })
    })

    expect(result.current.filters.name).toBe('test')
  })
})
