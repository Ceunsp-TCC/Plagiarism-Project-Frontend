import { NavbarWeb } from '@/app/(components-landing-page)/Navbar/components'
import { fireEvent, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import React from 'react'
import mockRouter from 'next-router-mock'

describe('Navbar landing page WEB', () => {
  it('Should be render a navbar', () => {
    const { getByAltText, getByText } = render(<NavbarWeb />)

    const logo = getByAltText('logo')
    const linkFuncionalitys = getByText('Funcionalidades')
    const linkContactUs = getByText('Contate-nos')
    const linkStatistics = getByText('Estatísticas')
    const buttonToLogin = getByText('Entrar')
    const buttonToSignup = getByText('Cadastrar-se')

    expect(logo).toBeInTheDocument()
    expect(linkFuncionalitys).toBeInTheDocument()
    expect(linkStatistics).toBeInTheDocument()
    expect(linkContactUs).toBeInTheDocument()
    expect(buttonToLogin).toBeInTheDocument()
    expect(buttonToSignup).toBeInTheDocument()
  })
  it('Should be navigate to signup', () => {
    const { getByText } = render(<NavbarWeb />)

    mockRouter.push('/')
    const buttonToSignup = getByText('Cadastrar-se')

    act(() => {
      fireEvent.click(buttonToSignup)
    })
    const atualPath = mockRouter.asPath
    expect(atualPath).toBe('/signup/form-school')
  })
  it('Should be navigate to login', () => {
    const { getByText } = render(<NavbarWeb />)

    mockRouter.push('/')

    const buttonToLogin = getByText('Entrar')

    act(() => {
      fireEvent.click(buttonToLogin)
    })
    const atualPath = mockRouter.asPath
    expect(atualPath).toBe('/login')
  })
})
