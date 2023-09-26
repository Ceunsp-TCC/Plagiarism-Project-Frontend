import { renderHook } from '@testing-library/react'
import { useLessonStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useLessonStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useLessonStore())

    expect(result.current.isOpenModalNewActivity).toBeDefined()
    expect(result.current.setIsOpenModalNewActivity).toBeDefined()
  })

  it('Should be open modal', () => {
    const { result } = renderHook(() => useLessonStore())

    act(() => {
      result.current.setIsOpenModalNewActivity(true)
    })

    expect(result.current.isOpenModalNewActivity).toBe(true)
  })
})
