import { renderHook } from '@testing-library/react'
import { useNav } from '@/app/(components-landing-page)/Navbar/hooks'
import { act } from 'react-dom/test-utils'

describe('useNav', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useNav())

    expect(result.current.isOpen).toBeDefined()
    expect(result.current.handleOpenNav).toBeDefined()
  })
  it('Should be call handleOpenNav', async () => {
    const { result } = renderHook(() => useNav())

    act(() => {
      result.current.handleOpenNav(true)
    })

    expect(result.current.isOpen).toBe(true)
  })
})
