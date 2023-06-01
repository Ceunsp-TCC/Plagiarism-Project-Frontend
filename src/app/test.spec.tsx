import React from 'react'
import { render } from '@testing-library/react'
import Home from './page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    const { getByText } = render(<Home />)

    expect(getByText('Plagiarism Front')).toBeInTheDocument()
  })
})
