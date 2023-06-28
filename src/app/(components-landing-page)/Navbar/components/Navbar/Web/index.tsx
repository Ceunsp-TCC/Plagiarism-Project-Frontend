'use client'
import { LinkWebLandingPage } from '@/app/(components-landing-page)/Navbar/components'
import Image from 'next/image'
import { useNav } from '@/app/(components-landing-page)/Navbar/hooks'
import * as S from './styles'

export function NavbarWeb() {
  const { handleNavigation } = useNav()
  return (
    <S.Container>
      <S.Content>
        <S.Card>
          <S.ContainerLogo>
            <Image width={50} height={50} src="/images/logo.png" alt="logo" />
          </S.ContainerLogo>
          <S.ContainerLinks>
            <S.WrapperLink>
              <LinkWebLandingPage href="#feature">
                Funcionalidades
              </LinkWebLandingPage>
            </S.WrapperLink>
            <S.WrapperLink>
              <LinkWebLandingPage href="#statistics">
                Estatísticas
              </LinkWebLandingPage>
            </S.WrapperLink>
            <>
              <LinkWebLandingPage href="#contact">
                Contate-nos
              </LinkWebLandingPage>
            </>
          </S.ContainerLinks>
          <S.ContainerButtons>
            <S.WrapperButton>
              <S.ButtonLanding
                onClick={() => handleNavigation('/login')}
                variant="secondary"
              >
                Entrar
              </S.ButtonLanding>
            </S.WrapperButton>
            <S.WrapperButton>
              <S.ButtonLanding
                onClick={() => handleNavigation('/signup/form-school')}
              >
                Cadastrar-se
              </S.ButtonLanding>
            </S.WrapperButton>
          </S.ContainerButtons>
        </S.Card>
      </S.Content>
    </S.Container>
  )
}
