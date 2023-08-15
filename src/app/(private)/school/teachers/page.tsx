'use client'
import { PageHeader } from '@components'
import { ModalNewTeacher, TeachersTable } from './components'
import { usePermissions } from '@hooks'
import { useTeachersStore } from '@store'
import * as S from './styles'

export default function Teachers() {
  const { setIsOpenModalNewTeacher } = useTeachersStore()
  const { checkHasPermission } = usePermissions()
  return (
    <>
      <PageHeader title="Professores" description="Gerencie seus professores" />
      {checkHasPermission('createTeacher') && (
        <S.ContainerNewTeacher>
          <S.ButtonWrapper>
            <S.ButtonCustom onClick={() => setIsOpenModalNewTeacher(true)}>
              Novo
            </S.ButtonCustom>
          </S.ButtonWrapper>
        </S.ContainerNewTeacher>
      )}
      <TeachersTable />
      <ModalNewTeacher />
    </>
  )
}
