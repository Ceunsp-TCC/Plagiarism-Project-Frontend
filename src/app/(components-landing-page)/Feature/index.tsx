import Image from 'next/image'
import { Badge } from './components'
import { features } from './objects'
import * as S from './styles'

export function Feature() {
  return (
    <S.Container>
      <S.Content>
        <S.Card>
          <S.ContainerCard>
            <S.ContainerImage>
              <Image
                width={500}
                height={500}
                className="rounded-3xl"
                src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzMXx8dW5pdmVyc2l0eXxlbnwwfHx8fDE2ODc4NzI0NTB8MA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920"
                alt="school"
              />
            </S.ContainerImage>
            <S.ContainerTexts>
              <S.ContentTexts>
                <S.Caption>Funcionalidades</S.Caption>
                <S.Title>
                  <S.TitleTextCommon>Gerencie sua escola </S.TitleTextCommon>
                  <S.TitleTextDetach>facilmente!</S.TitleTextDetach>
                </S.Title>
                <S.Description>
                  Funcionalidades poderosas para o seu sucesso acadêmico.
                </S.Description>
                <S.ContainerBadges>
                  {features.map((feature) => (
                    <Badge key={feature} text={feature} />
                  ))}
                </S.ContainerBadges>
              </S.ContentTexts>
            </S.ContainerTexts>
          </S.ContainerCard>
        </S.Card>
      </S.Content>
    </S.Container>
  )
}
