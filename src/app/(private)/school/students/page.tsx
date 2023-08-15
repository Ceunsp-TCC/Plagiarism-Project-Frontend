'use client'
import { PageHeader } from '@components'
import { ModalNewStudent, StudentsTable } from './components'
import { usePermissions } from '@hooks'
import { useStudentsStore } from '@store'
import * as S from './styles'

export default function Students() {
  const { setIsOpenModalNewStudent } = useStudentsStore()
  const { checkHasPermission } = usePermissions()
  return (
    <>
      <PageHeader title="Alunos" description="Gerencie seus alunos" />
      {checkHasPermission('createStudent') && (
        <S.ContainerNewStudent>
          <S.ButtonWrapper>
            <S.ButtonCustom onClick={() => setIsOpenModalNewStudent(true)}>
              Novo
            </S.ButtonCustom>
          </S.ButtonWrapper>
        </S.ContainerNewStudent>
      )}
      <StudentsTable />
      <ModalNewStudent />
    </>
  )
}
