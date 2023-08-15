import { renderHook } from '@testing-library/react'
import { useCoursesStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('uuseCoursesStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useCoursesStore())

    expect(result.current.isOpenModalNewCourse).toBeDefined()
    expect(result.current.currentPage).toBeDefined()
    expect(result.current.filters).toBeDefined()
    expect(result.current.setIsOpenModalNewCourse).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
    expect(result.current.setFilters).toBeDefined()
  })
  it('Should be set open modal new course', () => {
    const { result } = renderHook(() => useCoursesStore())

    act(() => {
      result.current.setIsOpenModalNewCourse(true)
    })

    expect(result.current.isOpenModalNewCourse).toBe(true)
  })
  it('Should be set current page', () => {
    const { result } = renderHook(() => useCoursesStore())

    act(() => {
      result.current.setCurrentPage(2)
    })

    expect(result.current.currentPage).toBe(2)
  })
  it('Should be set filters', () => {
    const { result } = renderHook(() => useCoursesStore())

    act(() => {
      result.current.setFilters({ name: 'test' })
    })

    expect(result.current.filters.name).toBe('test')
  })
})
