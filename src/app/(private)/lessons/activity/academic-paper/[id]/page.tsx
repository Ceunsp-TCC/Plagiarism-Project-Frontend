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
import * as S from './styles'

export default function AcademicPaper() {
  const { academicPaper, isLoading } = useGetAcademicPaper()

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
