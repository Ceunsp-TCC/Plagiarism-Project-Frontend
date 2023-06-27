import { renderHook } from '@testing-library/react'
import { useNav } from '@/app/(components-landing-page)/Navbar/hooks'
import { act } from 'react-dom/test-utils'
import mockRouter from 'next-router-mock'

describe('useNav', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useNav())

    expect(result.current.isOpen).toBeDefined()
    expect(result.current.handleOpenNav).toBeDefined()
    expect(result.current.handleNavigation).toBeDefined()
  })
  it('Should be call handleOpenNav', async () => {
    const { result } = renderHook(() => useNav())

    act(() => {
      result.current.handleOpenNav(true)
    })

    expect(result.current.isOpen).toBe(true)
  })
  it('Should be call handleNavigation', async () => {
    const { result } = renderHook(() => useNav())

    mockRouter.push('/')
    act(() => {
      result.current.handleNavigation('/signup/form-school')
    })

    const atualPath = mockRouter.asPath
    expect(atualPath).toBe('/signup/form-school')
  })
})
