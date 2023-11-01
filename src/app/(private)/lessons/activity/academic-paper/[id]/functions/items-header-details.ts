import { useGetDataAcademicPaper } from '../hooks'
import { formatStatusAcademicPaper } from './format-status-academic-paper'
export type ItemsHeader = 'Status' | 'Plágio' | 'Originalidade'

export const itemsHeaderDetails = (item: ItemsHeader) => {
  const { analysisStatus, report } = useGetDataAcademicPaper()
  const valueItem = {
    Status: formatStatusAcademicPaper(analysisStatus) || 'Pendente',
    Plágio: report === null ? 'Arquivo não revisado' : `${report.plagiarism} %`,
    Originalidade:
      report === null ? 'Arquivo não revisado' : `${report.originality} %`,
  }

  return valueItem[item] || 'Não encontrado informação'
}
