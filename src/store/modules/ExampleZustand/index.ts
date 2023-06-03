/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import type { ExampleZustandState } from '@/store/types'

const useStore = create<ExampleZustandState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
