import { renderHook } from '@testing-library/react'
import { useRandomPasswordModal } from '@/components/Notifications/hooks'

describe('useRandomPasswordModal', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useRandomPasswordModal())

    expect(result.current.title).toBeDefined()
    expect(result.current.buttonLabel).toBeDefined()
    expect(result.current.description).toBeDefined()
    expect(result.current.isOpenModalRandomPassword).toBeDefined()
    expect(result.current.randomPassword).toBeDefined()
    expect(result.current.setCloseModalRandomPassword).toBeDefined()
    expect(result.current.onClickButton).toBeDefined()
  })
})
