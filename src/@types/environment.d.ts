/* eslint-disable no-unused-vars */
type environment = 'development' | 'production'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_PLAGIARISM_API: string
    }
  }
}

export {}
