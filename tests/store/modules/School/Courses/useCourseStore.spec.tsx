import { renderHook } from '@testing-library/react'
import { useCourseStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useCourseStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useCourseStore())

    expect(result.current.isOpenModalNewSemester).toBeDefined()
    expect(result.current.payloadModalNewLesson).toBeDefined()
    expect(result.current.setIsOpenModalNewLesson).toBeDefined()
    expect(result.current.setIsOpenModalNewSemester).toBeDefined()
  })
  it('Should be set open modal new semester', () => {
    const { result } = renderHook(() => useCourseStore())

    act(() => {
      result.current.setIsOpenModalNewSemester(true)
    })

    expect(result.current.isOpenModalNewSemester).toBe(true)
  })
  it('Should be set open modal new lesson', () => {
    const { result } = renderHook(() => useCourseStore())

    act(() => {
      result.current.setIsOpenModalNewLesson({ isOpen: true, semesterId: 1 })
    })

    expect(result.current.payloadModalNewLesson.isOpen).toBe(true)
    expect(result.current.payloadModalNewLesson.semesterId).toBe(1)
  })
})
