'use client'
import { SectionLoading } from '@components'
import { useGetAcademicPaper } from '@/app/(private)/lessons/activity/academic-paper/[id]/hooks'
import {
  AcademicPaperView,
  Header,
  Comments,
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
      <AcademicPaperView url={academicPaper?.paper!} />
      <Comments comments={academicPaper?.comments} />
    </>
  )
}
