import type { LinkProps } from '@/app/(components-landing-page)/types'
import * as S from './styles'

export function LinkWebLandingPage({ href, children }: LinkProps) {
  return <S.LinkWebLandingPage href={href}>{children}</S.LinkWebLandingPage>
}
