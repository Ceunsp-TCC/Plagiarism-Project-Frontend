import { NavBarMobile } from '@/app/(components-landing-page)/Navbar/components'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import React from 'react'

describe('Navbar landing page MOBILE', () => {
  it('Should be render a navbar', () => {
    const { getByAltText, getByText, getByRole } = render(<NavBarMobile />)

    const buttonMenu = getByRole('menu-landing')

    act(() => {
      fireEvent.click(buttonMenu)
    })
    const logoNav = getByAltText('logo-nav')
    const logoMenu = getByAltText('logo-menu')
    const linkFuncionalitys = getByText('Funcionalidades')
    const linkPrices = getByText('Preços')
    const linkContactUs = getByText('Contate-nos')
    const buttonToLogin = getByText('Entrar')
    const buttonToSignup = getByText('Cadastrar-se')

    expect(logoNav).toBeInTheDocument()
    expect(logoMenu).toBeInTheDocument()
    expect(linkFuncionalitys).toBeInTheDocument()
    expect(linkPrices).toBeInTheDocument()
    expect(linkContactUs).toBeInTheDocument()
    expect(buttonToLogin).toBeInTheDocument()
    expect(buttonToSignup).toBeInTheDocument()
  })
})
