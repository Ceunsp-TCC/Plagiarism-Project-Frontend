'use client'
import { useState } from 'react'
export function useNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenNav = (open: boolean) => {
    setIsOpen(open)
  }

  return {
    isOpen,
    handleOpenNav,
  }
}
