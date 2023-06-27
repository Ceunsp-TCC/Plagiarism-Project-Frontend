import { CardContact } from './components'
import { contacts } from './objects'
import * as S from './styles'

export function Contact() {
  return (
    <S.Container>
      <S.Content>
        <S.Card>
          <S.CardContent>
            <S.ContainerHeader>
              <S.Caption>Contate-nos</S.Caption>
              <S.Title>Fale Conosco</S.Title>
              <S.Description>
                Conecte-se conosco e descubra como podemos auxiliá-lo.
              </S.Description>
            </S.ContainerHeader>
            <S.ContainerCards>
              {contacts.map((contact) => (
                <CardContact
                  title={contact.title}
                  key={contact.id}
                  Icon={contact.Icon}
                  info={contact.info}
                />
              ))}
            </S.ContainerCards>
          </S.CardContent>
        </S.Card>
      </S.Content>
    </S.Container>
  )
}
