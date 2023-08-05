type PayloadOpenModal = {
  title: string
  description: string
  buttonLabel?: string
  userId: number
}

export type NewPasswordModalState = {
  isOpenModalNewPassword: boolean
  userId: number
  title: string
  description: string
  buttonLabel?: string
  setOpenModalNewPassword: (payload: PayloadOpenModal) => void
  setCloseModalNewPassword: () => void
}
