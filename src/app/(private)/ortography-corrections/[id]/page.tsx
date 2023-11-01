'use client'
import { SectionLoading } from '@components'
import { useGetCorrection } from '@/app/(private)/ortography-corrections/[id]/hooks'
import * as S from './styles'

export default function OrtographyCorrection() {
  const { ortographyCorrection, isResult, isLoading, isOriginal, setViewMode } =
    useGetCorrection()

  if (isLoading) {
    return (
      <S.ContainerLoading>
        <S.LoadingWrapper>
          <SectionLoading />
        </S.LoadingWrapper>
      </S.ContainerLoading>
    )
  }
  return (
    <S.Container>
      <S.Identifier>
        {ortographyCorrection?.userProvidedIdentifier}
      </S.Identifier>
      <S.ContainerButtons>
        <S.ButtonWrapper>
          <S.ButtonCustom
            onClick={() => setViewMode('ORIGINAL')}
            isActive={isOriginal}
          >
            Original
          </S.ButtonCustom>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <S.ButtonCustom
            onClick={() => setViewMode('RESULT')}
            isActive={isResult}
          >
            Resultado
          </S.ButtonCustom>
        </S.ButtonWrapper>
      </S.ContainerButtons>
      <S.ContainerFile>
        <S.File
          role="file"
          src={
            isResult
              ? ortographyCorrection?.result
              : ortographyCorrection?.original
          }
        />
      </S.ContainerFile>
    </S.Container>
  )
}
