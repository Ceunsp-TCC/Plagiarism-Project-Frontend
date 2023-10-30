'use client'
import { useFilters } from '@/app/(private)/ortography-corrections/components/Table/hooks'
import * as S from './styles'

export function Filters() {
  const { handleSubmit, register, onSubmit } = useFilters()

  return (
    <S.Form method="GET" onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapper className="w-72">
        <S.InputOver
          {...register('identifier')}
          placeholder="Digite o identificador"
        />
      </S.InputWrapper>
    </S.Form>
  )
}
