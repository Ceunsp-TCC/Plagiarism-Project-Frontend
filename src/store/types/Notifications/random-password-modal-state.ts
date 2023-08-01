type PayloadOpenModal = {
  title: string
  description: string
  randomPassword: string
  buttonLabel?: string
  onClickButton?: () => void
}

export type RandomPasswordModalState = {
  isOpenModalRandomPassword: boolean
  title: string
  description: string
  buttonLabel?: string
  randomPassword: string
  onClickButton?: () => void
  setOpenModalRandomPassword: (payload: PayloadOpenModal) => void
  setCloseModalRandomPassword: () => void
}
