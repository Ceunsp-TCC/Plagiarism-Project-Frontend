import { create } from 'zustand'
import { AuthState } from '@/store/types'
import { persist } from 'zustand/middleware'
import { setCookie, getCookie } from 'cookies-next'

export const useAuthStore = create(
  persist<AuthState>(
    (set, get) => ({
      data: {
        accessToken: {
          token: '',
          type: 'bearer',
        },
        user: {
          id: 0,
          name: '',
          email: '',
          roleName: 'ADMIN',
          phoneNumber: '',
          permissions: [],
          createdAt: '',
        },
      },
      setUserState: (data) => set(() => ({ data })),
      clearState: () =>
        set(() => ({
          data: {
            accessToken: {
              token: '',
              type: 'bearer',
            },
            user: {
              id: 0,
              name: '',
              email: '',
              roleName: 'ADMIN',
              phoneNumber: '',
              permissions: [],
              createdAt: '',
            },
          },
        })),
    }),
    {
      name: 'auth-school-guardian',
      storage: {
        getItem: () => {
          const storedData = getCookie('auth-school-guardian')
          return storedData ? JSON.parse(storedData as string) : undefined
        },
        setItem: (key, value) => {
          setCookie('auth-school-guardian', JSON.stringify(value))
        },
        removeItem: () => {
          setCookie('auth-school-guardian', '')
        },
      },
    },
  ),
)
