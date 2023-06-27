import { Footer } from '@/app/(components-landing-page)'
import { render } from '@testing-library/react'
import React from 'react'

describe('Footer landing page', () => {
  it('Should be render a footer', () => {
    const { getByText, getByAltText } = render(<Footer />)

    const logo = getByAltText('logo-footer')
    const linkFuncionalitys = getByText('Funcionalidades')
    const linkContactUs = getByText('Contate-nos')
    const righDetach = getByText('School Guardian')
    const copyright = getByText('Ⓒ Copyright. Todos direitos reservados por')
    expect(linkFuncionalitys).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
    expect(linkContactUs).toBeInTheDocument()
    expect(righDetach).toBeInTheDocument()
    expect(copyright).toBeInTheDocument()
  })
})

/* <S.Container>
      <S.Content>
        <S.Card>
          <S.ContainerCard>
            <S.ContentCard>
              <S.ContainerLogo>
                <Image
                  width={50}
                  height={50}
                  src="/images/logo.png"
                  alt="logo-footer"
                />
              </S.ContainerLogo>
              <S.ContainerLinks>
                <S.ListLinks>
                  <S.LinkWrapper>
                    <LinkFooter href="#feature">Funcionalidades</LinkFooter>
                  </S.LinkWrapper>
                  <S.LinkWrapper>
                    <LinkFooter href="#contact">Contate-nos</LinkFooter>
                  </S.LinkWrapper>
                </S.ListLinks>
              </S.ContainerLinks>
            </S.ContentCard>
          </S.ContainerCard>
        </S.Card>
        <S.Rights>
          <S.Copyright>Ⓒ Copyright. Todos direitos reservados por </S.Copyright>
          <S.RightsContentDetach>School Guardian</S.RightsContentDetach>
        </S.Rights>
      </S.Content>
    </S.Container> */
