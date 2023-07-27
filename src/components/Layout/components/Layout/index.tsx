import { Navbar, Sidebar } from '@components'
import type { LayoutProps } from '@/components/types'
import * as S from './styles'

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <S.Container>
        <S.Content>{children}</S.Content>
      </S.Container>
    </>
  )
}
