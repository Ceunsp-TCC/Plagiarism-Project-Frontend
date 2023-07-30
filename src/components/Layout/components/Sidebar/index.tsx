'use client'
import { SidebarItem } from './components'
import { GiTeacher } from 'react-icons/gi'
import { PiStudentFill } from 'react-icons/pi'
import * as S from './styles'
import { usePermissions } from '@hooks'

export function Sidebar() {
  const { checkHasPermission } = usePermissions()
  return (
    <S.Container>
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
