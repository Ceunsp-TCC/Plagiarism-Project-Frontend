'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export function useNav() {
  const [isOpen, setIsOpen] = useState(false)

  const { push } = useRouter()
  const handleOpenNav = (open: boolean) => setIsOpen(open)

  const handleNavigation = (url: string) => {
    push(url)
    handleOpenNav(false)
  }
  return {
    isOpen,
    handleOpenNav,
    handleNavigation,
  }
}
