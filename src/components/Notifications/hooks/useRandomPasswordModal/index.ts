'use client'
import { useRandomPasswordModalStore } from '@store'
export function useRandomPasswordModal() {
  const {
    isOpenModalRandomPassword,
    title,
    description,
    buttonLabel,
    randomPassword,
    onClickButton,
    setCloseModalRandomPassword,
  } = useRandomPasswordModalStore()

  return {
    isOpenModalRandomPassword,
    title,
    description,
    buttonLabel,
    randomPassword,
    onClickButton,
    setCloseModalRandomPassword,
  }
}
