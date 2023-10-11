'use client'
import {
  InputFile,
  InputLabel,
  TextArea,
  TextAreaLabel,
  ButtonLoadingLottie,
  ErrorMessage,
} from '@components'
import { checkHasError } from '@functions'
import { useSendAcademicPaper } from '@/app/(private)/lessons/activity/[id]/hooks'
import * as S from './styles'

export function SendAcademicPaperForm() {
  const { errors, paperName, isLoading, onSubmit, handleSubmit, register } =
    useSendAcademicPaper()
  return (
    <S.Form>
      <S.InputWrapper className="w-full">
        <InputFile
          {...register('paper')}
          label={() => <InputLabel>Arraste seu trabalho aqui!</InputLabel>}
          placeholder="trabalho"
          currentFile={paperName}
          specifications="PDF (MAX. 1MB)"
          hasError={checkHasError(errors.paper)}
          errorMessage={() =>
            checkHasError(errors.paper) && (
              <ErrorMessage>{errors.paper?.message?.toString()}</ErrorMessage>
            )
          }
        />
      </S.InputWrapper>
      <S.InputWrapper className="w-full">
        <TextArea
          {...register('comments')}
          label={() => <TextAreaLabel>Observações</TextAreaLabel>}
          placeholder="Se precisar digite uma observação"
          maxLength={255}
          rows={8}
        />
      </S.InputWrapper>
      <S.ContainerButton>
        <S.ButtonWrapper>
          <S.ButtonCustom
            isLoading={isLoading}
            loading={() => <ButtonLoadingLottie />}
            onClick={handleSubmit(onSubmit)}
          >
            Enviar
          </S.ButtonCustom>
        </S.ButtonWrapper>
      </S.ContainerButton>
    </S.Form>
  )
}
