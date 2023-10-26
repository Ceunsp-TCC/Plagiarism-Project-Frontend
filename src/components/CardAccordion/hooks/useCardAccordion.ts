import { useState } from 'react'

export const useCardAccordion = () => {
  const [accordionOpen, setAccordionOpen] = useState(false)

  return {
    accordionOpen,
    setAccordionOpen,
  }
}
