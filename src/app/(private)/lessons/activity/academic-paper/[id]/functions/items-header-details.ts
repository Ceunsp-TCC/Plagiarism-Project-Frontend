import { useGetDataAcademicPaper } from '../hooks'
import { formatStatusAcademicPaper } from './format-status-academic-paper'
export type ItemsHeader = 'Status' | 'Similaridade' | 'Originalidade'

export const itemsHeaderDetails = (item: ItemsHeader) => {
  const { analysisStatus, report } = useGetDataAcademicPaper()
  const valueItem = {
    Status: formatStatusAcademicPaper(analysisStatus) || 'Pendente',
    Similaridade:
      report === null ? 'Arquivo não revisado' : `${report.plagiarism} %`,
    Originalidade:
      report === null ? 'Arquivo não revisado' : `${report.originality} %`,
  }

  return valueItem[item] || 'Não encontrado informação'
}
