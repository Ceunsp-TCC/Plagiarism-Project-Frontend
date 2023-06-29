import LayoutLogin from '@/app/(public)/login/layout'
import { render } from '@testing-library/react'
import React from 'react'

describe('Layout login', () => {
  it('Should be render a layout', async () => {
    const { getByText, getByAltText } = render(<LayoutLogin>Test</LayoutLogin>)

    const subTitleLottie = getByText('Melhore suas correções!')
    const descriptionLottie = getByText(
      'Promovendo a originalidade e o aprendizado autêntico, oferecemos serviços especializados para verificar e aprimorar trabalhos escolares, eliminando o plágio e garantindo o sucesso acadêmico.',
    )
    const linkSignup = getByText('Crie sua conta')
    const logo = getByAltText('logo')
    const children = getByText('Test')

    expect(subTitleLottie).toBeInTheDocument()
    expect(linkSignup).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
    expect(descriptionLottie).toBeInTheDocument()
    expect(children).toBeInTheDocument()
  })
})
