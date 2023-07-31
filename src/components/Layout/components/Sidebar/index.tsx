'use client'
import { SidebarItem } from './components'
import { GiTeacher } from 'react-icons/gi'
import { PiStudentFill } from 'react-icons/pi'
import { useSidebar } from '@/components/Layout/hooks'
import * as S from './styles'

export function Sidebar() {
  const { openSidebarInMobileMode, checkHasPermission } = useSidebar()
  return (
    <S.Container $openSidebarInMobileMode={openSidebarInMobileMode}>
      <S.ContainerGroupItems>
        <S.GroupItems>
          {checkHasPermission('teachers') && (
            <SidebarItem
              label="Professores"
              href="/teachers"
              Icon={GiTeacher}
            />
          )}
          {checkHasPermission('students') && (
            <SidebarItem label="Alunos" href="/students" Icon={PiStudentFill} />
          )}
        </S.GroupItems>
      </S.ContainerGroupItems>
    </S.Container>
  )
}
