'use client'
import {
  Modal,
  Input,
  InputMask,
  InputLabel,
  ErrorMessage,
  ButtonLoadingLottie,
} from '@components'
import { useNewTeacher } from '@/app/(private)/teachers/hooks'
import { checkHasError } from '@functions'
import * as S from './styles'

export function ModalNewTeacher() {
  const {
    isOpenModalNewTeacher,
    errors,
    isSubmitting,
    isLoading,
    onCloseModal,
    handleSubmit,
    onSubmit,
    register,
  } = useNewTeacher()
  return (
    <Modal isOpen={isOpenModalNewTeacher} onClose={onCloseModal}>
      <S.Container>
        <S.Title>Registre seu professor</S.Title>
        <S.Form method="POST">
          <S.ContentForm>
            <S.InputWrapper className="w-72 md:w-80">
              <Input
                {...register('name')}
                hasError={checkHasError(errors.name)}
                label={() => <InputLabel>Nome</InputLabel>}
                placeholder="Digite o nome do professor"
                errorMessage={() =>
                  checkHasError(errors.name) && (
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
            <S.InputWrapper className="w-72 md:w-80">
              <Input
                {...register('email')}
                hasError={checkHasError(errors.email)}
                label={() => <InputLabel>Email</InputLabel>}
                placeholder="Digite o email do professor"
                errorMessage={() =>
                  checkHasError(errors.email) && (
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
            <S.InputWrapper className="w-72 md:w-80">
              <InputMask
                {...register('CPF')}
                mask="999.999.999-99"
                hasError={checkHasError(errors.CPF)}
                label={() => <InputLabel>CPF</InputLabel>}
                placeholder="999.999.999-99"
                errorMessage={() =>
                  checkHasError(errors.CPF) && (
                    <ErrorMessage>{errors.CPF?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
            <S.InputWrapper className="w-72 md:w-80">
              <InputMask
                {...register('phoneNumber')}
                mask="(99) 99999-9999"
                hasError={checkHasError(errors.phoneNumber)}
                label={() => <InputLabel>Celular</InputLabel>}
                placeholder="(99) 99999-9999"
                errorMessage={() =>
                  checkHasError(errors.phoneNumber) && (
                    <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
            <S.InputWrapper className="w-72 md:w-80">
              <InputMask
                {...register('CND')}
                mask="9999999999999999"
                hasError={checkHasError(errors.CND)}
                label={() => <InputLabel>CND</InputLabel>}
                placeholder="Digite o CND do professor"
                errorMessage={() =>
                  checkHasError(errors.CND) && (
                    <ErrorMessage>{errors.CND?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
          </S.ContentForm>

          <S.ContainerButtons>
            <S.ButtonWrapper>
              <S.ButtonCustom
                isLoading={isSubmitting || isLoading}
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
