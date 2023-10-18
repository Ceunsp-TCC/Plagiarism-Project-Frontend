import { TextArea, TextAreaLabel } from '@components'
import * as S from './styles'

export function Comments({ comments = '' }: { comments: string | undefined }) {
  return (
    <S.InputWrapper>
      <TextArea
        label={() => <TextAreaLabel>Observações</TextAreaLabel>}
        placeholder="Observações digitadas pelo aluno"
        maxLength={255}
        rows={8}
        readOnly
        defaultValue={comments}
      />
    </S.InputWrapper>
  )
}
