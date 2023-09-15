'use client'
import { useFilters } from '@/app/(private)/school/classes/components/Table/hooks'
import * as S from './styles'

export function Filters() {
  const { handleSubmit, register, onSubmit } = useFilters()
  return (
    <S.Form method="GET" onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapper className="w-72">
        <S.InputOver
          {...register('name')}
          placeholder="Digite o nome da classe"
        />
      </S.InputWrapper>
    </S.Form>
  )
}
