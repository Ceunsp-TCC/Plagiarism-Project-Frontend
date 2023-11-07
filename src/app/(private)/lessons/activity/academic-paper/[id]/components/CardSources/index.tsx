import React from 'react'
import { formatToShort } from '@/app/(private)/lessons/activity/academic-paper/[id]/functions'
import { CardAccordion } from '@/components/CardAccordion'
import { useGetDataAcademicPaper } from '@/app/(private)/lessons/activity/academic-paper/[id]/hooks'
import * as S from './styles'

export const CardSource = () => {
  const { hasSources, isCompleted, sources } = useGetDataAcademicPaper()

  return (
    <S.ContainerMaster>
      <S.ContainerTitle>
        <S.Title>Fontes</S.Title>
      </S.ContainerTitle>
      <S.ContainerContent>
        {isCompleted && hasSources ? (
          sources!.map((element, index) => (
            <CardAccordion title={element.title} key={index}>
              <S.ContainerMasterItems>
                <S.ContainerItems>
                  <S.LinkPage href={element.url} target="_blank">
                    {formatToShort(element.url)}
                  </S.LinkPage>
                </S.ContainerItems>
                <S.ContainerItems>
                  <S.TextPlagiarism>
                    {Math.ceil(element.plagiarism)}% similar
                  </S.TextPlagiarism>
                </S.ContainerItems>
              </S.ContainerMasterItems>
            </CardAccordion>
          ))
        ) : (
          <S.TextArchiveHasNotReview>
            {isCompleted ? 'Fontes não encontradas' : 'Arquivo não revisado...'}
          </S.TextArchiveHasNotReview>
        )}
      </S.ContainerContent>
    </S.ContainerMaster>
  )
}
