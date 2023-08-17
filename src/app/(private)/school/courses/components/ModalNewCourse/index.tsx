'use client'
import {
  Modal,
  Input,
  InputLabel,
  InputMoney,
  InputFile,
  ErrorMessage,
  ButtonLoadingLottie,
  TextArea,
  TextAreaLabel,
  Select,
  SelectLabel,
  SelectOption,
} from '@components'
import { useNewCourse } from '@/app/(private)/school/courses/hooks'
import { coursesModalitys, coursesCategorys } from '@objects'
import { checkHasError } from '@functions'
import * as S from './styles'

export function ModalNewCourse() {
  const {
    isOpenModalNewCourse,
    errors,
    imageName,
    isLoading,
    onCloseModal,
    handleSubmit,
    onSubmit,
    register,
  } = useNewCourse()

  return (
    <Modal isOpen={isOpenModalNewCourse} onClose={onCloseModal}>
      <S.Container>
        <S.Title>Registre seu curso</S.Title>
        <S.Form method="POST">
          <S.ContentForm>
            <S.InputWrapper className="col-span-3">
              <Input
                {...register('name')}
                hasError={checkHasError(errors.name)}
                label={() => <InputLabel>Nome</InputLabel>}
                placeholder="Digite o nome do curso"
                errorMessage={() =>
                  checkHasError(errors.name) && (
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
            <S.InputWrapper className="col-span-3">
              <TextArea
                {...register('description')}
                maxLength={255}
                rows={5}
                label={() => <TextAreaLabel>Descrição</TextAreaLabel>}
                placeholder="Digite uma descrição para seu curso"
              />
            </S.InputWrapper>
            <S.InputWrapper className="col-span-1">
              <Select
                {...register('modality')}
                placeholder="Modalidade"
                label={() => <SelectLabel>Modalidade</SelectLabel>}
                hasError={checkHasError(errors.modality)}
                errorMessage={() =>
                  checkHasError(errors.modality) && (
                    <ErrorMessage>{errors.modality?.message}</ErrorMessage>
                  )
                }
              >
                <SelectOption value="">Selecione...</SelectOption>
                {coursesModalitys.map((modality) => (
                  <SelectOption key={modality.value} value={modality.value}>
                    {modality.label}
                  </SelectOption>
                ))}
              </Select>
            </S.InputWrapper>
            <S.InputWrapper className="col-span-1">
              <Select
                {...register('category')}
                placeholder="Categoria"
                label={() => <SelectLabel>Categoria</SelectLabel>}
                hasError={checkHasError(errors.category)}
                errorMessage={() =>
                  checkHasError(errors.category) && (
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                  )
                }
              >
                <SelectOption value="">Selecione...</SelectOption>
                {coursesCategorys.map((category) => (
                  <SelectOption key={category.value} value={category.value}>
                    {category.label}
                  </SelectOption>
                ))}
              </Select>
            </S.InputWrapper>
            <S.InputWrapper className="col-span-1">
              <InputMoney
                {...register('price')}
                label={() => (
                  <S.LabelForInputMoney>Mensalidade</S.LabelForInputMoney>
                )}
                decimalSeparator=","
                groupSeparator="."
                defaultValue={0}
                prefix="R$ "
                allowNegativeValue={false}
                type="text"
                maxLength={10}
                placeholder="R$ 00,00"
                hasError={checkHasError(errors.price)}
                errorMessage={() =>
                  checkHasError(errors.price) && (
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
            <S.InputWrapper className="col-span-3">
              <InputFile
                {...register('image')}
                label={() => (
                  <InputLabel>Coloque uma imagem para o curso</InputLabel>
                )}
                placeholder="image"
                currentFile={imageName}
                specifications="PNG ou JPG (MAX. 5MB)"
                hasError={checkHasError(errors.image)}
                errorMessage={() =>
                  checkHasError(errors.image) && (
                    <ErrorMessage>
                      {errors.image?.message?.toString()}
                    </ErrorMessage>
                  )
                }
              />
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
