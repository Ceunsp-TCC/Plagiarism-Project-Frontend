import LayoutSignup from '@/app/(public)/signup/layout'
import { render } from '@testing-library/react'
import React from 'react'

jest.mock('react-lottie')
describe('Layout signup', () => {
  it('Should be render a layout', async () => {
    const { getByText, getByAltText } = render(
      <LayoutSignup>Test</LayoutSignup>,
    )

    const titleSignUp = getByText('Cadastre sua Escola!')
    const subTitleSignUp = getByText(
      'Fortalecendo a proteção e a excelência educacional.',
    )
    const subTitleLottie = getByText('Melhore suas correções!')
    const descriptionLottie = getByText(
      'Promovendo a originalidade e o aprendizado autêntico, oferecemos serviços especializados para verificar e aprimorar trabalhos escolares, eliminando o plágio e garantindo o sucesso acadêmico.',
    )
    const linkLogin = getByText('Entrar')
    const logo = getByAltText('logo')
    const children = getByText('Test')

    expect(subTitleLottie).toBeInTheDocument()
    expect(linkLogin).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
    expect(descriptionLottie).toBeInTheDocument()
    expect(children).toBeInTheDocument()
    expect(titleSignUp).toBeInTheDocument()
    expect(subTitleSignUp).toBeInTheDocument()
  })
})
