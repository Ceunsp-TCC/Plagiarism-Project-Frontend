'use client'
import { useGetCourse } from '@/app/(private)/school/courses/[id]/hooks'
import {
  Header,
  Semesters,
} from '@/app/(private)/school/courses/[id]/components'
import { SectionLoading } from '@components'
import * as S from './styles'

export default function Course() {
  const { isLoading, course } = useGetCourse()

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
        <Header
          name={course?.name!}
          description={course?.description!}
          image={course?.image!}
        />
        <Semesters semesters={course?.semesters!} />
      </S.Container>
    </div>
  )
}
