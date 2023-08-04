import type { StatusOtherUsers } from '@/@types/base-types'

export const transformColorBadgeStatus = (status: StatusOtherUsers) => {
  const colors = {
    ACTIVE: 'GREEN',
    INACTIVE: 'RED',
  }

  return colors[status]
}
export const transformTextBadgeStatus = (status: StatusOtherUsers) => {
  const texts = {
    ACTIVE: 'Ativo',
    INACTIVE: 'Inativo',
  }

  return texts[status]
}
