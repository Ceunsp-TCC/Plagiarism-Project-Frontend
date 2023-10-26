import type { StatusAcademicPaper } from '@/services'

export const formatStatusAcademicPaper = (status: StatusAcademicPaper) => {
  const formatStatus = {
    COMPLETED: 'COMPLETO',
    PENDING: 'PENDENTE',
    PROCESSING: 'PROCESSANDO',
  }

  return formatStatus[status] || 'PENDENTE'
}
