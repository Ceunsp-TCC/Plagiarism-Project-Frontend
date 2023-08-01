import { PageHeader } from '@components'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

describe('PageHeader', () => {
  it('Should be render a page header', () => {
    const { getByText } = render(
      <PageHeader title="Test title" description="Test description" />,
    )
    const title = getByText('Test title')
    const description = getByText('Test description')
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
