'use client'
import {
  Modal,
  Select,
  SelectLabel,
  SelectOption,
  ErrorMessage,
  ButtonLoadingLottie,
} from '@components'
import {
  useLinkTeacherAndLesson,
  useGetTeachers,
} from '@/app/(private)/school/classes/[id]/hooks'
import { checkHasError } from '@functions'
import * as S from './styles'

export function ModalLinkTeacher() {
  const {
    errors,
    isLoading,
    payloadModalLinkTeacher,
    register,
    handleSubmit,
    onSubmit,
    onCloseModal,
  } = useLinkTeacherAndLesson()

  const { teachers } = useGetTeachers()

  return (
    <Modal isOpen={payloadModalLinkTeacher.isOpen} onClose={onCloseModal}>
      <S.Container>
        <S.Title>Vincule um professor a está aula</S.Title>
        <S.Form method="POST">
          <S.InputWrapper className="col-span-2">
            <Select
              {...register('teacher')}
              hasError={checkHasError(errors.teacher)}
              label={() => <SelectLabel>Professor</SelectLabel>}
              placeholder="Selecione um Professor"
              errorMessage={() =>
                checkHasError(errors.teacher) && (
                  <ErrorMessage>{errors.teacher?.message}</ErrorMessage>
                )
              }
            >
              <SelectOption value="">Selecione um professor</SelectOption>
              {teachers?.items.map((teacher) => (
                <SelectOption key={teacher.teacherId} value={teacher.teacherId}>
                  {teacher.name}
                </SelectOption>
              ))}
            </Select>
          </S.InputWrapper>
          <S.ContainerButtons>
            <S.ButtonWrapper>
              <S.ButtonCustom
                isLoading={isLoading}
                loading={() => <ButtonLoadingLottie />}
                onClick={handleSubmit(onSubmit)}
              >
                Salvar
              </S.ButtonCustom>
            </S.ButtonWrapper>
          </S.ContainerButtons>
        </S.Form>
      </S.Container>
    </Modal>
  )
}
