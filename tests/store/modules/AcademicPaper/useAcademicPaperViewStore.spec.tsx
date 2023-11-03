import { renderHook } from '@testing-library/react'
import { useAcademicPaperViewStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useAcademicPaperViewStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useAcademicPaperViewStore())

    expect(result.current.openAvaliationModal).toBeDefined()
    expect(result.current.setStateAvaliationModal).toBeDefined()
  })

  it('Should be set state modal', () => {
    const { result } = renderHook(() => useAcademicPaperViewStore())

    act(() => {
      result.current.setStateAvaliationModal(true)
    })

    expect(result.current.openAvaliationModal).toBe(true)
  })
})
