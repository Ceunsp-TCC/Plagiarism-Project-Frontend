'use client'
import { AvaliationButton } from './components'
import { Modal, ButtonLoadingLottie } from '@components'
import { useAvaliationModal } from '@/app/(private)/lessons/activity/academic-paper/[id]/hooks'
import * as S from './styles'

export function AvaliationModal() {
  const {
    selectedNote,
    isLoading,
    openAvaliationModal,
    hasNote,
    closeModal,
    mutate,
    setSelectedNote,
  } = useAvaliationModal()

  return (
    <Modal isOpen={openAvaliationModal} onClose={closeModal}>
      <S.Container>
        <S.Title>Escolha uma nota de 0 a 10</S.Title>
        <AvaliationButton
          currentNote={selectedNote!}
          onSelect={(note) => setSelectedNote(note)}
        />
        <S.ContainerButtons>
          <S.ButtonWrapper>
            <S.ButtonCustom
              disabled={!hasNote}
              isLoading={isLoading}
              loading={() => <ButtonLoadingLottie />}
              onClick={() => mutate()}
            >
              Salvar
            </S.ButtonCustom>
          </S.ButtonWrapper>
        </S.ContainerButtons>
      </S.Container>
    </Modal>
  )
}
