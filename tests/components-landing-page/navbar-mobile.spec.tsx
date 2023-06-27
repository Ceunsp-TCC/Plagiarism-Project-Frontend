import { NavBarMobile } from '@/app/(components-landing-page)/Navbar/components'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import mockRouter from 'next-router-mock'
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
    const linkContactUs = getByText('Contate-nos')
    const buttonToLogin = getByText('Entrar')
    const buttonToSignup = getByText('Cadastrar-se')

    expect(logoNav).toBeInTheDocument()
    expect(logoMenu).toBeInTheDocument()
    expect(linkFuncionalitys).toBeInTheDocument()

    expect(linkContactUs).toBeInTheDocument()
    expect(buttonToLogin).toBeInTheDocument()
    expect(buttonToSignup).toBeInTheDocument()
  })
  it('Should be navigate to signup', () => {
    const { getByText, getByRole } = render(<NavBarMobile />)

    mockRouter.push('/')
    const buttonMenu = getByRole('menu-landing')

    act(() => {
      fireEvent.click(buttonMenu)
    })
    const buttonToSignup = getByText('Cadastrar-se')

    act(() => {
      fireEvent.click(buttonToSignup)
    })
    const atualPath = mockRouter.asPath
    expect(atualPath).toBe('/signup/form-school')
  })
})
