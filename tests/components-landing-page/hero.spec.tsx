import { Hero } from '@/app/(components-landing-page)'
import { render } from '@testing-library/react'
import React from 'react'

describe('Hero landing page', () => {
  it('Should be render a hero', () => {
    const { getByText } = render(<Hero />)

    const caption = getByText('Proteção contra plágio acadêmico')
    const description = getByText(
      'Proteção contra plágio acadêmico. Preservando a originalidade e a integridade acadêmica.',
    )
    const textInDetachTitle = getByText('School Guardian')
    const commonTextInTitle = getByText('Defesa contra o plágio.')

    expect(caption).toBeInTheDocument()
    expect(textInDetachTitle).toBeInTheDocument()
    expect(commonTextInTitle).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
