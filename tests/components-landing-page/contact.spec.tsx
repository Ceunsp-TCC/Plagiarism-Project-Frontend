import { Contact } from '@/app/(components-landing-page)'
import { render } from '@testing-library/react'
import React from 'react'

describe('Contact us landing page', () => {
  it('Should be render a contact', () => {
    const { getByText } = render(<Contact />)

    const caption = getByText('Contate-nos')
    const title = getByText('Fale Conosco')
    const description = getByText(
      'Conecte-se conosco e descubra como podemos auxiliá-lo.',
    )
    const cardTitleEmail = getByText('Envie um Email')
    const cardInfoEmail = getByText('schoolguardian01@outlook.com')
    const cardTitleWhatsapp = getByText('Chame no Whatsapp')
    const cardInfoWhatsapp = getByText('(11) 99186-0862')
    const cardTitleAddress = getByText('Endereço')
    const cardInfoAddress = getByText(
      'R. José Weissohn, 153 - Centro, Salto - SP, 13328-300',
    )

    expect(caption).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(cardTitleEmail).toBeInTheDocument()
    expect(cardInfoEmail).toBeInTheDocument()
    expect(cardTitleWhatsapp).toBeInTheDocument()
    expect(cardInfoWhatsapp).toBeInTheDocument()
    expect(cardTitleAddress).toBeInTheDocument()
    expect(cardInfoAddress).toBeInTheDocument()
  })
})
