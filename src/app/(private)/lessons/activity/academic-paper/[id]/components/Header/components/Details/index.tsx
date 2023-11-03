'use client'
import React from 'react'
import { ChartDonut, ButtonLoadingLottie } from '@components'
import { itemsHeaderPlagiarismDetails } from '@/app/(private)/lessons/activity/academic-paper/[id]/constants'
import {
  itemsHeaderDetails,
  ItemsHeader,
} from '@/app/(private)/lessons/activity/academic-paper/[id]//functions'
import { useHeader } from '@/app/(private)/lessons/activity/academic-paper/[id]/hooks'
import * as S from './styles'

export const Details = () => {
  const {
    isNotComplete,
    isPending,
    isLoading,
    report,
    sendAcademicPaperToReview,
  } = useHeader()

  return (
    <S.ContainerMaster>
      {itemsHeaderPlagiarismDetails.map((element, index) => {
        const isFirstItem = index === 0
        const enabledToRenderAnalyseButton = isFirstItem && isPending
        return (
          <S.ContainerMasterItems key={index}>
            <>
              <S.TitleItem>
                {itemsHeaderDetails(element as ItemsHeader)}
              </S.TitleItem>
            </>
            <S.DescriptionItem>{element}</S.DescriptionItem>
            {enabledToRenderAnalyseButton && (
              <S.ButtonCustom
                className="mt-10"
                disabled={isLoading}
                isLoading={isLoading}
                loading={() => <ButtonLoadingLottie />}
                onClick={sendAcademicPaperToReview}
              >
                Analisar trabalho
              </S.ButtonCustom>
            )}
          </S.ContainerMasterItems>
        )
      })}
      <S.ContainerMasterItems>
        <S.ContainerGraphAvaliationButton>
          <ChartDonut
            colors={['#3B82F6', '#54D62C']}
            labels={['Plágio', 'Originalidade']}
            values={[
              isNotComplete ? 0 : report?.plagiarism!,
              isNotComplete ? 0 : report?.originality!,
            ]}
            height={350}
            width={350}
          />
        </S.ContainerGraphAvaliationButton>
      </S.ContainerMasterItems>
    </S.ContainerMaster>
  )
}
