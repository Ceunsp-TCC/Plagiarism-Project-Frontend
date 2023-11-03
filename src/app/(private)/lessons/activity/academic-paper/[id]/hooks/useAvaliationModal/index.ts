'use client'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { academicPapersServices } from '@services'
import { ShowToast } from '@components'
import { useAcademicPaperViewStore } from '@store'
import { useParams } from 'next/navigation'

export function useAvaliationModal() {
  const { id } = useParams()
  const queryClient = useQueryClient()
  const { openAvaliationModal, setStateAvaliationModal } =
    useAcademicPaperViewStore()
  const [selectedNote, setSelectedNote] = useState<number | null>(null)

  const hasNote = selectedNote !== null
  const closeModal = () => {
    setStateAvaliationModal(false)
    setSelectedNote(null)
  }

  const onSuccess = () => {
    closeModal()
    ShowToast({
      title: 'Nota enviada com sucesso!',
      toastType: 'SUCCESS',
      description: 'A nota para este trabalho foi enviado!',
    })
    queryClient.refetchQueries(['academic-paper'])
  }

  const onError = () => {
    closeModal()
    ShowToast({
      title: 'Ocorreu um erro',
      toastType: 'ERROR',
      description: 'Falha ao enviar nota ,tente novamente mais tarde!',
    })
  }

  const { mutate, isLoading } = useMutation(
    () =>
      academicPapersServices.sendNote({
        academicPaperId: Number(id),
        note: selectedNote!,
      }),
    {
      onSuccess,
      onError,
    },
  )

  return {
    selectedNote,
    openAvaliationModal,
    isLoading,
    hasNote,
    setSelectedNote,
    mutate,
    closeModal,
  }
}
