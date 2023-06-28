import * as S from './styles'

export function Statistics() {
  return (
    <S.Container id="statistics">
      <S.Content>
        <S.Card>
          <S.CardContent>
            <S.ContainerTitle>
              <S.Title>Resultados que Impressionam</S.Title>
              <S.Description>
                Resultados comprovados: detecção precisa de plágio. Confie em
                nós para preservar a integridade acadêmica.
              </S.Description>
            </S.ContainerTitle>
            <S.ContainerCards>
              <S.SubCard>
                <S.ContentSubCard>
                  <S.SubCardInside>
                    <S.PercentageTitle>
                      <S.Percentage>95%</S.Percentage>
                    </S.PercentageTitle>
                    <S.SubTitlePercentage>
                      Taxa de Detecção de Plágio
                    </S.SubTitlePercentage>
                    <S.DescriptionPercentage>
                      Detectamos plágio com precisão. Sua confiança na
                      integridade acadêmica é nossa prioridade.
                    </S.DescriptionPercentage>
                  </S.SubCardInside>
                </S.ContentSubCard>
              </S.SubCard>
              <S.SubCard>
                <S.ContentSubCard>
                  <S.SubCardInside>
                    <S.PercentageTitle>
                      <S.Percentage>98%</S.Percentage>
                    </S.PercentageTitle>
                    <S.SubTitlePercentage>
                      Taxa de Correção Ortográfica
                    </S.SubTitlePercentage>
                    <S.DescriptionPercentage>
                      Facilitamos a correção ortográfica dos trabalhos
                      acadêmicos.
                    </S.DescriptionPercentage>
                  </S.SubCardInside>
                </S.ContentSubCard>
              </S.SubCard>
            </S.ContainerCards>
          </S.CardContent>
        </S.Card>
      </S.Content>
    </S.Container>
  )
}
