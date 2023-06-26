import { LinkCustom } from '@components'
import { render } from '@testing-library/react'
import React from 'react'

describe('Link', () => {
  it('Should be render a link', () => {
    const { getByText } = render(<LinkCustom href="#">link test</LinkCustom>)

    const link = getByText('link test')

    expect(link).toBeInTheDocument()
  })
})
