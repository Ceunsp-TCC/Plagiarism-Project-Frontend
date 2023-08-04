'use client'
import { PageHeader } from '@components'
import { ModalNewStudent, StudentsTable } from './components'
import { useStudentsStore } from '@store'
import * as S from './styles'

export default function Students() {
  const { setIsOpenModalNewStudent } = useStudentsStore()
  return (
    <>
      <PageHeader title="Alunos" description="Gerencie seus alunos" />
      <S.ContainerNewStudent>
        <S.ButtonWrapper>
          <S.ButtonCustom onClick={() => setIsOpenModalNewStudent(true)}>
            Novo
          </S.ButtonCustom>
        </S.ButtonWrapper>
      </S.ContainerNewStudent>
      <StudentsTable />
      <ModalNewStudent />
    </>
  )
}
