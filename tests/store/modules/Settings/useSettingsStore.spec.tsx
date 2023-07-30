import { renderHook } from '@testing-library/react'
import { useSettingsStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('useSettingsStore', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useSettingsStore())

    expect(result.current.openSidebarInMobileMode).toBeDefined()
    expect(result.current.setOpenSidebarInMobileMode).toBeDefined()
  })
  it('Should be set open sidebar in mobile', () => {
    const { result } = renderHook(() => useSettingsStore())

    act(() => {
      result.current.setOpenSidebarInMobileMode(true)
    })

    expect(result.current.openSidebarInMobileMode).toBe(true)
  })
})
