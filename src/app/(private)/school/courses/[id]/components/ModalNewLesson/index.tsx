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
import { useNewLesson } from '@/app/(private)/school/courses/[id]/hooks'
import { checkHasError } from '@functions'
import * as S from './styles'

export function ModalNewLesson() {
  const {
    payloadModalNewLesson,
    errors,
    isLoading,
    onClose,
    register,
    handleSubmit,
    onSubmit,
  } = useNewLesson()

  return (
    <Modal isOpen={payloadModalNewLesson.isOpen} onClose={onClose}>
      <S.Container>
        <S.Title>Registre uma aula</S.Title>
        <S.Form method="POST">
          <S.InputWrapper>
            <Input
              {...register('name')}
              hasError={checkHasError(errors.name)}
              label={() => <InputLabel>Nome</InputLabel>}
              placeholder="Digite o nome da aula"
              errorMessage={() =>
                checkHasError(errors.name) && (
                  <ErrorMessage>{errors.name?.message}</ErrorMessage>
                )
              }
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <Input
              {...register('place')}
              hasError={checkHasError(errors.place)}
              label={() => <InputLabel>Local</InputLabel>}
              placeholder="Digite o local da aula"
              errorMessage={() =>
                checkHasError(errors.place) && (
                  <ErrorMessage>{errors.place?.message}</ErrorMessage>
                )
              }
            />
          </S.InputWrapper>
          <S.InputWrapper className="col-span-2">
            <TextArea
              {...register('description')}
              hasError={checkHasError(errors.description)}
              label={() => <TextAreaLabel>Descrição</TextAreaLabel>}
              placeholder="Digite uma descrição para esta aula"
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
