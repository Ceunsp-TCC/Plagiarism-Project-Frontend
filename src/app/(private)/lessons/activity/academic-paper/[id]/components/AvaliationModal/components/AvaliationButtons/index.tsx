import * as S from './styles'

const avaliableNotes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export type AvaliationButtonProps = {
  currentNote?: number
  onSelect: (currentNote: number) => void
}

export function AvaliationButton({
  currentNote = undefined,
  onSelect,
}: AvaliationButtonProps) {
  return (
    <S.Container>
      {avaliableNotes.map((note) => {
        const isSelected = note === currentNote
        return (
          <S.Button
            onClick={() => onSelect(note)}
            $note={note}
            key={note}
            $isSelected={isSelected}
          >
            {note}
          </S.Button>
        )
      })}
    </S.Container>
  )
}
