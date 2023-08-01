import { render, renderHook } from '@testing-library/react'
import { RandomPasswordModal } from '@components'
import { useRandomPasswordModalStore } from '@store'
import { act } from 'react-dom/test-utils'

describe('Random Password Modal', () => {
  it('Should be render a modal', () => {
    const { result } = renderHook(() => useRandomPasswordModalStore())

    act(() => {
      result.current.setOpenModalRandomPassword({
        title: 'title-test',
        description: 'description-test',
        randomPassword: 'test-password',
      })
    })
    const { getByText } = render(<RandomPasswordModal />)

    const title = getByText('title-test')
    const description = getByText('description-test')
    const randomPassword = getByText('test-password')
    const button = getByText('Entendi')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(randomPassword).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
