'use client'
import { PageHeader } from '@components'
import { useOrtographicCorrectionTableStore } from '@store'
import { OrtographyCorrectionsTable, NewCorrectionModal } from './components'
import * as S from './styles'

export default function OrtographyCorrections() {
  const { setOpenModalNewCorrection } = useOrtographicCorrectionTableStore()
  return (
    <>
      <PageHeader
        title="Correções ortográfica"
        description="Corrija seus textos automáticamente"
      />
      <S.ContainerNewOrtographyCorrection>
        <S.ButtonWrapper>
          <S.ButtonCustom onClick={() => setOpenModalNewCorrection(true)}>
            Nova correção
          </S.ButtonCustom>
        </S.ButtonWrapper>
      </S.ContainerNewOrtographyCorrection>
      <OrtographyCorrectionsTable />
      <NewCorrectionModal />
    </>
  )
}
