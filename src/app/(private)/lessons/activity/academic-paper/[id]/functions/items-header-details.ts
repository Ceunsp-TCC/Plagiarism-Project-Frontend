import { useGetDataAcademicPaper } from '../hooks'
import { formatStatusAcademicPaper } from './format-status-academic-paper'
export type ItemsHeader = 'Status' | 'Plágio' | 'Originalidade'

export const itemsHeaderDetails = (item: ItemsHeader) => {
  const { dataAcademicPaper } = useGetDataAcademicPaper()
  const valueItem = {
    Status:
      formatStatusAcademicPaper(dataAcademicPaper.analysisStatus) || 'Pendente',
    Plágio:
      dataAcademicPaper.report === null
        ? 'Arquivo não revisado'
        : `${dataAcademicPaper.report.plagiarism} %`,
    Originalidade:
      dataAcademicPaper.report === null
        ? 'Arquivo não revisado'
        : `${dataAcademicPaper.report.originality} %`,
  }

  return valueItem[item] || 'Não encontrado informação'
}
