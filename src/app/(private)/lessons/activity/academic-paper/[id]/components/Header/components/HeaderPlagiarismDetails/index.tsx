'use client'
import React from 'react'
import * as S from './styles'
import { ButtonLoading, ChartDonut, SectionLoading } from '@/components'
import { itemsHeaderPlagiarismDetails } from '../../../../constants'
import { itemsHeaderDetails, ItemsHeader } from '../../../../functions'
import { useHeaderPlagiarismDetails } from '../../../../hooks'

export const HeaderPlagiarismDetails = () => {
  const {
    dataAcademicPaper,
    reportsHasNull,
    isLoading,
    handleSendAccademicPaperToReview,
  } = useHeaderPlagiarismDetails()
  return (
    <S.ContainerMaster>
      {itemsHeaderPlagiarismDetails.map((element, index) => (
        <S.ContainerMasterItems key={index}>
          <>
            <S.TitleItem>
              {itemsHeaderDetails(element as ItemsHeader)}
            </S.TitleItem>
          </>
          <S.DescriptionItem>{element}</S.DescriptionItem>
          {index === 0 && dataAcademicPaper.analysisStatus === 'PENDING' && (
            <S.ButtonCustom
              disabled={isLoading}
              isLoading={isLoading}
              loading={() => <ButtonLoading />}
              onClick={handleSendAccademicPaperToReview}
            >
              Analisar trabalho
            </S.ButtonCustom>
          )}
        </S.ContainerMasterItems>
      ))}
      <S.ContainerMasterItems>
        <ChartDonut
          colors={['#3B82F6', '#54D62C']}
          labels={['Plágio', 'Originalidade']}
          values={[
            reportsHasNull ? 0 : dataAcademicPaper.report?.plagiarism!,
            reportsHasNull ? 0 : dataAcademicPaper.report?.originality!,
          ]}
          height={350}
          width={350}
        />
      </S.ContainerMasterItems>
    </S.ContainerMaster>
  )
}
