import { renderHook } from '@testing-library/react'
import { useFilters } from '@/app/(private)/students/components/Table/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

describe('useFilters', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useFilters())

    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.register).toBeDefined()
  })
})
