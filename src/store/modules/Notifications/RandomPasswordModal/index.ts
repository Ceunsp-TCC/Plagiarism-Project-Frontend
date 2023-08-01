import { create } from 'zustand'
import type { RandomPasswordModalState } from '@/store/types'

export const useRandomPasswordModalStore = create<RandomPasswordModalState>(
  (set) => ({
    isOpenModalRandomPassword: false,
    title: '',
    description: '',
    buttonLabel: 'Entendi',
    randomPassword: '',
    onClickButton: () => null,
    setOpenModalRandomPassword: (payload) =>
      set({ ...payload, isOpenModalRandomPassword: true }),
    setCloseModalRandomPassword: () =>
      set({
        isOpenModalRandomPassword: false,
        title: '',
        description: '',
        buttonLabel: 'Entendi',
      }),
  }),
)
