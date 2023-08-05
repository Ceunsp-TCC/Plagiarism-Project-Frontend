import { create } from 'zustand'
import type { NewPasswordModalState } from '@store'

export const useNewPasswordModalStore = create<NewPasswordModalState>(
  (set) => ({
    isOpenModalNewPassword: false,
    title: '',
    description: '',
    buttonLabel: 'Trocar senha',
    userId: 0,

    onClickButton: () => null,
    setOpenModalNewPassword: (payload) =>
      set({ ...payload, isOpenModalNewPassword: true }),
    setCloseModalNewPassword: () =>
      set({
        isOpenModalNewPassword: false,
        title: '',
        description: '',
        buttonLabel: 'Trocar senha',
        userId: 0,
      }),
  }),
)
