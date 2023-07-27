import type { SidebarItemProps } from '@/components/types'
import * as S from './styles'

export function SidebarItem({ href = '', label = '', Icon }: SidebarItemProps) {
  return (
    <S.Li>
      <S.LinkCustom href={href}>
        <Icon className="w-5 h-5 transition duration-75 fill-gray-400 group-hover:fill-white" />
        <S.Label>{label}</S.Label>
      </S.LinkCustom>
    </S.Li>
  )
}
