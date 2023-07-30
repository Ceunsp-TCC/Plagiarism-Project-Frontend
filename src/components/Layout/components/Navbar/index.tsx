'use client'
import { useNavbar } from '@/components/Layout/hooks'
import Image from 'next/image'
import { Dropdown, Avatar } from 'flowbite-react'
import * as S from './styles'

export function Navbar() {
  const { user, handleLogout } = useNavbar()
  return (
    <S.Nav>
      <S.ContentNav>
        <S.SubContainer>
          <S.ContainerLogoAvatar>
            <S.ButtonSidebar type="button">
              <S.MenuIcon />
            </S.ButtonSidebar>
            <S.ContainerLogo>
              <Image
                width={40}
                height={40}
                src="/images/logo.png"
                alt="logo-nav"
                className="mr-3"
              />
              <S.BrandText>School Guardian</S.BrandText>
            </S.ContainerLogo>
          </S.ContainerLogoAvatar>
          <S.ContainerDropdown>
            <S.ContentDropdown>
              <Dropdown
                className="bg-gray-800 border-none"
                inline
                label={
                  <Avatar
                    onClick={() => console.log('profile')}
                    alt="avatar"
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <S.Name>{user.name}</S.Name>
                  <S.Email>{user.email}</S.Email>
                </Dropdown.Header>
                <S.NavigationItem>Configurações</S.NavigationItem>
                <Dropdown.Item
                  className="text-white transition-colors duration-500 focus:bg-gray-700 hover:bg-gray-700"
                  onClick={handleLogout}
                >
                  Sair
                </Dropdown.Item>
              </Dropdown>
            </S.ContentDropdown>
          </S.ContainerDropdown>
        </S.SubContainer>
      </S.ContentNav>
    </S.Nav>
  )
}
