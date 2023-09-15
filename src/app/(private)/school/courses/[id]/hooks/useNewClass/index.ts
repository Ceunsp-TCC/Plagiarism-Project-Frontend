'use client'
import { useEffect } from 'react'
import { useModalConfirmationStore } from '@store'
import { ShowToast } from '@components'
import { useParams } from 'next/navigation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigation } from '@hooks'
import { classServices } from '@services'

export function useNewClass() {
  const { navigate } = useNavigation()
  const queryClient = useQueryClient()
  const { id } = useParams()
  const { setOpenModalConfirmation, setCloseModalConfirmation, setLoading } =
    useModalConfirmationStore()

  const handleCloseModal = () => setCloseModalConfirmation()
  const { mutate: onCreateClass, isLoading } = useMutation(
    () => classServices.create({ courseId: Number(id) }),
    {
      onSuccess: () => {
        handleCloseModal()
        ShowToast({
          title: 'Classe registrada com sucesso!',
          description: 'A classe foi registrada na plataforma',
          toastType: 'SUCCESS',
        })
        queryClient.refetchQueries(['classes'])
        navigate('/school/classes')
      },
      onError: () => {
        handleCloseModal()
        ShowToast({
          title: 'Ocorreu um erro',
          toastType: 'ERROR',
          description:
            'Por favor adicione semestres e aulas a cada semestre no curso',
        })
      },
    },
  )

  const handleOpenModal = () => {
    setOpenModalConfirmation({
      text: 'Tem certeza que deseja criar uma nova classe?',
      type: 'WARNING',
      onDisagree: handleCloseModal,
      onAgree: onCreateClass,
    })
  }

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  return {
    handleOpenModal,
  }
}
