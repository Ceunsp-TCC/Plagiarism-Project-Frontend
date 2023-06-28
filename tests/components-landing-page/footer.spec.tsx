import { Footer } from '@/app/(components-landing-page)'
import { render } from '@testing-library/react'
import React from 'react'

describe('Footer landing page', () => {
  it('Should be render a footer', () => {
    const { getByText, getByAltText } = render(<Footer />)

    const logo = getByAltText('logo-footer')
    const linkFuncionalitys = getByText('Funcionalidades')
    const linkContactUs = getByText('Contate-nos')
    const linkStatistics = getByText('Estatísticas')
    const righDetach = getByText('School Guardian')
    const copyright = getByText('Ⓒ Copyright. Todos direitos reservados por')

    expect(logo).toBeInTheDocument()
    expect(linkFuncionalitys).toBeInTheDocument()
    expect(linkContactUs).toBeInTheDocument()
    expect(linkStatistics).toBeInTheDocument()
    expect(righDetach).toBeInTheDocument()
    expect(copyright).toBeInTheDocument()
  })
})
