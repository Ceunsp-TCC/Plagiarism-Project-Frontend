import { NavbarWeb } from '@/app/(components-landing-page)/Navbar/components'
import { render } from '@testing-library/react'
import React from 'react'

describe('Navbar landing page WEB', () => {
  it('Should be render a navbar', () => {
    const { getByAltText, getByText } = render(<NavbarWeb />)

    const logo = getByAltText('logo')
    const linkFuncionalitys = getByText('Funcionalidades')
    const linkPrices = getByText('Preços')
    const linkContactUs = getByText('Contate-nos')
    const buttonToLogin = getByText('Entrar')
    const buttonToSignup = getByText('Cadastrar-se')

    expect(logo).toBeInTheDocument()
    expect(linkFuncionalitys).toBeInTheDocument()
    expect(linkPrices).toBeInTheDocument()
    expect(linkContactUs).toBeInTheDocument()
    expect(buttonToLogin).toBeInTheDocument()
    expect(buttonToSignup).toBeInTheDocument()
  })
})
