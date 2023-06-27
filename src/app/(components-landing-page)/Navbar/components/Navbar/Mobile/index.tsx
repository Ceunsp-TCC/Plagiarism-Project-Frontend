'use client'
import { LinkMobileLandingPage } from '@/app/(components-landing-page)/Navbar/components'
import Image from 'next/image'
import { useNav } from '@/app/(components-landing-page)/Navbar/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import * as S from './styles'

export function NavBarMobile() {
  const { isOpen, handleOpenNav, handleNavigation } = useNav()
  return (
    <S.Container>
      <S.Content>
        <S.Card>
          <S.ContainerLogo>
            <Image
              width={50}
              height={50}
              src="/images/logo.png"
              alt="logo-nav"
            />
          </S.ContainerLogo>
          <S.MenuButton onClick={() => handleOpenNav(true)}>
            <S.MenuIcon role="menu-landing" />
          </S.MenuButton>
        </S.Card>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                width: 0,
              }}
              animate={{ width: '100%', opacity: 1 }}
              exit={{
                opacity: 0,
                width: 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <S.ContainerSideBar>
                <S.BackDrop></S.BackDrop>
                <S.ContainerNav>
                  <S.ContentNav>
                    <S.SubContainerHeader>
                      <S.ContainerHeader>
                        <S.ContainerLogo>
                          <Image
                            width={50}
                            height={50}
                            src="/images/logo.png"
                            alt="logo-menu"
                          />
                        </S.ContainerLogo>
                        <S.ContainerMenuCloseIcon>
                          <S.MenuCloseIcon
                            onClick={() => handleOpenNav(false)}
                          />
                        </S.ContainerMenuCloseIcon>
                      </S.ContainerHeader>
                    </S.SubContainerHeader>
                    <S.ContainerLinks>
                      <S.ListLinks>
                        <S.LinkWrapper>
                          <LinkMobileLandingPage
                            href="#"
                            onClick={() => handleOpenNav(false)}
                          >
                            Funcionalidades
                          </LinkMobileLandingPage>
                        </S.LinkWrapper>
                        <S.LinkWrapper>
                          <LinkMobileLandingPage
                            href="#"
                            onClick={() => handleOpenNav(false)}
                          >
                            Preços
                          </LinkMobileLandingPage>
                        </S.LinkWrapper>
                        <S.LinkWrapper>
                          <LinkMobileLandingPage
                            href="#"
                            onClick={() => handleOpenNav(false)}
                          >
                            Contate-nos
                          </LinkMobileLandingPage>
                        </S.LinkWrapper>
                      </S.ListLinks>
                    </S.ContainerLinks>
                    <S.ContainerButtons>
                      <S.SubContainerButtons>
                        <S.WrapperButton>
                          <S.ButtonLanding
                            $isSecondary
                            variant="secondary"
                            onClick={() => handleOpenNav(false)}
                          >
                            Entrar
                          </S.ButtonLanding>
                        </S.WrapperButton>
                        <S.WrapperButton>
                          <S.ButtonLanding
                            onClick={() =>
                              handleNavigation('/signup/form-school')
                            }
                          >
                            Cadastrar-se
                          </S.ButtonLanding>
                        </S.WrapperButton>
                      </S.SubContainerButtons>
                    </S.ContainerButtons>
                  </S.ContentNav>
                </S.ContainerNav>
              </S.ContainerSideBar>
            </motion.div>
          )}
        </AnimatePresence>
      </S.Content>
    </S.Container>
  )
}
