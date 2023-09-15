import { renderHook } from '@testing-library/react'
import { useClasseStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useClasseStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useClasseStore())

    expect(result.current.currentPage).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
  })

  it('Should be set current page', () => {
    const { result } = renderHook(() => useClasseStore())

    act(() => {
      result.current.setCurrentPage(2)
    })

    expect(result.current.currentPage).toBe(2)
  })

  it('Should be set open modal link teacher', () => {
    const { result } = renderHook(() => useClasseStore())

    act(() => {
      result.current.setIsOpenModalLinkTeacher({ isOpen: true, lessonId: 1 })
    })

    expect(result.current.payloadModalLinkTeacher.isOpen).toBe(true)
    expect(result.current.payloadModalLinkTeacher.lessonId).toBe(1)
  })
})
