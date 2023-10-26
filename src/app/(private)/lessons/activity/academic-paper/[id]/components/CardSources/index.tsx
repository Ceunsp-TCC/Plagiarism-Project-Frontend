import React from 'react'
import * as S from './styles'
import { CardAccordion } from '@/components/CardAccordion'
import { useGetDataAcademicPaper } from '../../hooks'

export const CardSource = () => {
  const { dataAcademicPaper } = useGetDataAcademicPaper()
  return (
    <S.ContainerMaster>
      <S.ContainerTitle>
        <S.Title>Fontes</S.Title>
      </S.ContainerTitle>
      <S.ContainerContent>
        {dataAcademicPaper.analysisStatus === 'COMPLETED' &&
        dataAcademicPaper?.report!.sources.length > 0 ? (
          dataAcademicPaper?.report!.sources.map((element, index) => (
            <CardAccordion title={element.title} key={index}>
              <S.ContainerMasterItems>
                <S.ContainerItems>
                  <S.ItemContent>Página de referência:</S.ItemContent>
                  <S.LinkPage href={element.url} target="_blank">
                    {element.url}
                  </S.LinkPage>
                </S.ContainerItems>
                <S.ContainerItems>
                  <S.ItemContent>Porcentagem de plágio:</S.ItemContent>
                  <S.TextPlagiarism>{element.plagiarism}%</S.TextPlagiarism>
                </S.ContainerItems>
              </S.ContainerMasterItems>
            </CardAccordion>
          ))
        ) : (
          <S.TextArchiveHasNotReview>
            {dataAcademicPaper.analysisStatus === 'COMPLETED'
              ? 'Fontes não encontradas'
              : 'Arquivo não revisado...'}
          </S.TextArchiveHasNotReview>
        )}
      </S.ContainerContent>
    </S.ContainerMaster>
  )
}
