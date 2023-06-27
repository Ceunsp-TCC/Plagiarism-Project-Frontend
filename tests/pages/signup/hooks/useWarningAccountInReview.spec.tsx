import { renderHook } from '@testing-library/react'
import { useWarningAccountInReview } from '@/app/(public)/signup/hooks'

describe('useWarningAccountInReview', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useWarningAccountInReview())

    expect(result.current.handleNavigate).toBeDefined()
    expect(result.current.isWrongStep).toBeDefined()
  })
})
