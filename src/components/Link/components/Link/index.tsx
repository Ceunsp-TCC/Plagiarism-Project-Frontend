import React, { ReactNode } from 'react'
import Link from 'next/link'
import './styles.css'

interface NextLinkProps {
  href: string
  children: ReactNode
}

export const LinkCustom: React.FC<NextLinkProps> = ({ href, children }) => {
  return (
    <Link className="link" href={href}>
      {children}
    </Link>
  )
}
