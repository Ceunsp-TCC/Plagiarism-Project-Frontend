'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSignupStore } from '@/store'

export function useWarningAccountInReview() {
  const { step, setStepState } = useSignupStore()
  const isWrongStep = step !== 'WARNINGACCOUNTINREVIEW'
  const { push } = useRouter()

  const handleNavigate = async (url: string) => {
    await setStepState('FORMSCHOOL')
    push(url)
  }

  useEffect(() => {
    if (isWrongStep) {
      handleNavigate('/signup/form-school')
    }
  }, [step])
  return {
    isWrongStep,
    handleNavigate,
  }
}
