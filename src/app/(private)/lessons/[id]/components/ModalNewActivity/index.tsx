'use client'
import {
  Modal,
  Input,
  InputLabel,
  ErrorMessage,
  ButtonLoadingLottie,
  TextArea,
  TextAreaLabel,
  Select,
  SelectLabel,
  SelectOption,
} from '@components'
import { useNewActivity } from '@/app/(private)/lessons/[id]/hooks'
import { checkHasError } from '@functions'
import { activityTypes } from '@objects'
import * as S from './styles'

export function ModalNewActivity() {
  const {
    errors,
    isOpenModalNewActivity,
    isLoading,
    handleCloseModal,
    handleSubmit,
    onSubmit,
    register,
  } = useNewActivity()

  return (
    <Modal isOpen={isOpenModalNewActivity} onClose={handleCloseModal}>
      <S.Container>
        <S.Title>Registre sua atividade</S.Title>
        <S.Form method="POST">
          <S.ContentForm>
            <S.InputWrapper className="col-span-2">
              <Input
                {...register('title')}
                hasError={checkHasError(errors.title)}
                label={() => <InputLabel>Título da atividade</InputLabel>}
                placeholder="Digite o título da atividade"
                errorMessage={() =>
                  checkHasError(errors.title) && (
                    <ErrorMessage>{errors.title?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
            <S.InputWrapper className="col-span-2">
              <TextArea
                {...register('comments')}
                hasError={checkHasError(errors.comments)}
                label={() => <TextAreaLabel>Observações</TextAreaLabel>}
                placeholder="Se precisar digite uma observação"
                maxLength={255}
                rows={8}
                errorMessage={() =>
                  checkHasError(errors.comments) && (
                    <ErrorMessage>{errors.comments?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
            <S.InputWrapper className="col-span-2">
              <Select
                {...register('type')}
                placeholder="Tipo de atividade"
                label={() => <SelectLabel>Tipo de atividade</SelectLabel>}
                hasError={checkHasError(errors.type)}
                errorMessage={() =>
                  checkHasError(errors.type) && (
                    <ErrorMessage>{errors.type?.message}</ErrorMessage>
                  )
                }
              >
                <SelectOption value="">Selecione...</SelectOption>
                {activityTypes.map((activity) => (
                  <SelectOption key={activity.value} value={activity.value}>
                    {activity.label}
                  </SelectOption>
                ))}
              </Select>
            </S.InputWrapper>
          </S.ContentForm>

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
