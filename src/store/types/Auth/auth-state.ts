import type { ContentLogin } from '@services'

export type AuthState = {
  data: ContentLogin
  setUserState: (user: ContentLogin) => void
  clearState: () => void
}
