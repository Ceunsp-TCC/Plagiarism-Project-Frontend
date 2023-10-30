'use client'
import { PageHeader } from '@components'
import { OrtographyCorrectionsTable } from './components'
import * as S from './styles'

export default function OrtographyCorrections() {
  return (
    <>
      <PageHeader
        title="Correções ortográfica"
        description="Corrija seus textos automáticamente"
      />
      <S.ContainerNewOrtographyCorrection>
        <S.ButtonWrapper>
          <S.ButtonCustom>Nova correção</S.ButtonCustom>
        </S.ButtonWrapper>
      </S.ContainerNewOrtographyCorrection>
      <OrtographyCorrectionsTable />
    </>
  )
}
