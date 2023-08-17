import { renderHook } from '@testing-library/react'
import { useFilters } from '@/app/(private)/school/courses/components/Table/hooks'

describe('useFilters', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useFilters())

    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.register).toBeDefined()
  })
})
