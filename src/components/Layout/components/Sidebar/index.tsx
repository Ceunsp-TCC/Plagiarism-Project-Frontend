import { SidebarItem } from './components'
import { sidebarItems } from '@/components/Layout/object'
import * as S from './styles'

export function Sidebar() {
  return (
    <S.Container>
      <S.ContainerGroupItems>
        <S.GroupItems>
          {sidebarItems.map((sidebarItem) => (
            <SidebarItem
              key={sidebarItem.label}
              href={sidebarItem.href}
              label={sidebarItem.label}
              Icon={sidebarItem.icon}
            />
          ))}
        </S.GroupItems>
      </S.ContainerGroupItems>
    </S.Container>
  )
}
