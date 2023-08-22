'use client'
import {
  Modal,
  Input,
  InputLabel,
  TextArea,
  TextAreaLabel,
  ErrorMessage,
  ButtonLoadingLottie,
} from '@components'
import { useNewSemester } from '@/app/(private)/school/courses/[id]/hooks'
import { checkHasError } from '@functions'
import * as S from './styles'

export function ModalNewSemester() {
  const {
    isOpenModalNewSemester,
    errors,
    isLoading,
    onClose,
    register,
    handleSubmit,
    onSubmit,
  } = useNewSemester()

  return (
    <Modal isOpen={isOpenModalNewSemester} onClose={onClose}>
      <S.Container>
        <S.Title>Registre um semestre</S.Title>
        <S.Form method="POST">
          <S.InputWrapper className="col-span-1">
            <Input
              {...register('name')}
              hasError={checkHasError(errors.name)}
              label={() => <InputLabel>Nome</InputLabel>}
              placeholder="Digite o nome do semestre"
              errorMessage={() =>
                checkHasError(errors.name) && (
                  <ErrorMessage>{errors.name?.message}</ErrorMessage>
                )
              }
            />
          </S.InputWrapper>
          <S.InputWrapper className="col-span-1">
            <TextArea
              {...register('description')}
              hasError={checkHasError(errors.description)}
              label={() => <TextAreaLabel>Descrição</TextAreaLabel>}
              placeholder="Digite uma descrição para este semestre"
              maxLength={255}
              rows={8}
              errorMessage={() =>
                checkHasError(errors.description) && (
                  <ErrorMessage>{errors.description?.message}</ErrorMessage>
                )
              }
            />
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
