import type { LinkFooterProps } from '@/app/(components-landing-page)/types'
import * as S from './styles'

export function LinkFooter({ children, href = '#' }: LinkFooterProps) {
  return <S.LinkCustom href={href}>{children}</S.LinkCustom>
}
