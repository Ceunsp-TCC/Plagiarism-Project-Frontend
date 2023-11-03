'use client'
import { SectionLoading } from '@components'
import { useGetAcademicPaper } from '@/app/(private)/lessons/activity/academic-paper/[id]/hooks'
import {
  AcademicPaperView,
  Header,
  Comments,
  CardSource,
  AvaliationModal,
} from '@/app/(private)/lessons/activity/academic-paper/[id]/components'
import { useAcademicPaperViewStore } from '@store'
import * as S from './styles'

export default function AcademicPaper() {
  const { academicPaper, isLoading, hasAvaliation } = useGetAcademicPaper()
  const { setStateAvaliationModal } = useAcademicPaperViewStore()

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
    <>
      <S.ContainerAvaliationDownload>
        {!hasAvaliation && (
          <S.ButtonCustom
            className="w-44"
            onClick={() => setStateAvaliationModal(true)}
          >
            Avaliar
          </S.ButtonCustom>
        )}
      </S.ContainerAvaliationDownload>

      <Header />
      <S.WrapperContent>
        <AcademicPaperView url={academicPaper?.paper!} />
        <CardSource />
      </S.WrapperContent>

      <Comments comments={academicPaper?.comments} />
      <AvaliationModal />
    </>
  )
}
