import React from 'react'
import * as S from './styles'
import { useCardAccordion } from './hooks'
import { PropsCardAccordion } from '../types'

export const CardAccordion = ({ title, children }: PropsCardAccordion) => {
  const { accordionOpen, setAccordionOpen } = useCardAccordion()
  return (
    <S.ContainerMaster $openAccordion={accordionOpen}>
      <S.ContainerTitle $openAccordion={accordionOpen}>
        <S.Title>{title}</S.Title>
        <S.ButtonIcon onClick={() => setAccordionOpen((state) => !state)}>
          {accordionOpen && <S.IconArrowUp />}
          {!accordionOpen && <S.IconArrowDown />}
        </S.ButtonIcon>
      </S.ContainerTitle>
      <S.ContainerContent $openAccordion={accordionOpen}>
        {children}
      </S.ContainerContent>
    </S.ContainerMaster>
  )
}
