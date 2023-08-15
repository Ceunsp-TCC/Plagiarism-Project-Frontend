'use client'
import { SidebarItem } from './components'
import { GiTeacher } from 'react-icons/gi'
import { PiStudentFill } from 'react-icons/pi'
import { BiSolidBookAlt } from 'react-icons/bi'
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
              href="/school/teachers"
              Icon={GiTeacher}
            />
          )}
          {checkHasPermission('students') && (
            <SidebarItem
              label="Alunos"
              href="/school/students"
              Icon={PiStudentFill}
            />
          )}
          {checkHasPermission('courses') && (
            <SidebarItem
              label="Cursos"
              href="/school/courses"
              Icon={BiSolidBookAlt}
            />
          )}
        </S.GroupItems>
      </S.ContainerGroupItems>
    </S.Container>
  )
}
