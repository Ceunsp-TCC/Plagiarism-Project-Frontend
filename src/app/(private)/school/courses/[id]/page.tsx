'use client'
import { useGetCourse } from '@/app/(private)/school/courses/[id]/hooks'
import {
  NameAndDescription,
  Semesters,
} from '@/app/(private)/school/courses/[id]/components'
import { SectionLoading } from '@components'
import * as S from './styles'

export default function Course() {
  const { isLoading } = useGetCourse()

  if (isLoading) {
    return (
      <S.ContainerLoading>
        <S.WrapperLoading>
          <SectionLoading />
        </S.WrapperLoading>
      </S.ContainerLoading>
    )
  }
  return (
    <div className="h-full">
      <S.Container>
        <NameAndDescription />
        <Semesters />
      </S.Container>
    </div>
  )
}
