import * as S from './styles'
import {
  transformCategory,
  transformModality,
} from '@/app/(private)/school/courses/functions'
import { formatMoney } from '@utils'
import type { ItemProps } from '@/app/(private)/school/courses/types'

export function Item({
  image = '',
  name = '',
  description = '',
  category = 'AGRICULTURALSCIENCES',
  modality = 'HYBRID',
  price = 0,
  createdAt = '',
}: ItemProps) {
  return (
    <S.Card>
      <S.ContainerImage>
        <S.ImageCustom src={image} alt="image-course" />
      </S.ContainerImage>
      <S.ContainerNameAndDescriptionAndCategory>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
        <S.TitleInformation>Categoria</S.TitleInformation>
        <S.ValueInformation>{transformCategory(category)}</S.ValueInformation>
      </S.ContainerNameAndDescriptionAndCategory>
      <S.ContainerAdditionalInformations>
        <S.ContainerModality>
          <S.TitleInformation>Modalidade</S.TitleInformation>
          <S.ValueInformation>{transformModality(modality)}</S.ValueInformation>
        </S.ContainerModality>
        <S.ContainerPrice>
          <S.TitleInformation>Preço</S.TitleInformation>
          <S.ValueInformation>
            {formatMoney(price.toString())}
          </S.ValueInformation>
        </S.ContainerPrice>
        <S.ContainerCreatedAt>
          <S.TitleInformation>Criado em</S.TitleInformation>
          <S.ValueInformation>{createdAt}</S.ValueInformation>
        </S.ContainerCreatedAt>
      </S.ContainerAdditionalInformations>
    </S.Card>
  )
}
