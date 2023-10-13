'use client'
import { SectionLoading } from '@components'
import { useGetActivity } from '@/app/(private)/lessons/activity/[id]/hooks'
import {
  Header,
  SendAcademicPaperForm,
  AcademicPapers,
} from '@/app/(private)/lessons/activity/[id]/components'
import * as S from './styles'

export default function Activity() {
  const {
    activity,
    isLoading,
    isEnabledToSendAcademicPaper,
    isEnabledToViewAcademicPapers,
  } = useGetActivity()

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
      <Header title={activity?.title!} comments={activity?.comments!} />
      {isEnabledToSendAcademicPaper && <SendAcademicPaperForm />}
      {isEnabledToViewAcademicPapers && <AcademicPapers />}
    </S.Container>
  )
}
