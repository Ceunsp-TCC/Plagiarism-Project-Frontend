import { Button, ButtonLoadingLottie } from '@/components'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

describe('Button', () => {
  it('Should be render a button', () => {
    const { getByText } = render(<Button>Test</Button>)

    expect(getByText('Test')).toBeInTheDocument()
  })
  it('Should be render a button in loading', async () => {
    const { getByRole } = render(
      <Button loading={() => <ButtonLoadingLottie />} isLoading>
        Test
      </Button>,
    )
    const loading = getByRole('loading')
    expect(loading).toBeInTheDocument()
  })

  it('Should be call function when click in button', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(<Button onClick={onClickMock}>Test</Button>)

    const button = getByText('Test')

    act(() => {
      fireEvent.click(button)
    })

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
