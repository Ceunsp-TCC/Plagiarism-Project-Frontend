import type { CourseCategory, Modality } from '@types'

export const transformCategory = (category: CourseCategory) => {
  const categories = {
    NATURALSCIENCES: 'Ciências Naturais',
    SOCIALSCIENCES: 'Ciências Sociais',
    ARTSHUMANITIES: 'Artes e Humanidades',
    INFORMATIONTECHNOLOGY: 'Tecnologia da Informação',
    ENGINEERING: 'Engenharia',
    BUSINESSADMINISTRATION: 'Negócios e Administração',
    HEALTHMEDICINE: 'Saúde e Medicina',
    EDUCATION: 'Educação',
    LAW: 'Direito',
    COMMUNICATIONJOURNALISM: 'Comunicação e Jornalismo',
    ENVIRONMENTSUSTAINABILITY: 'Meio Ambiente e Sustentabilidade',
    PSYCHOLOGY: 'Psicologia',
    ARCHITECTUREURBANPLANNING: 'Arquitetura e Planejamento Urbano',
    MARKETING: 'Marketing',
    AGRICULTURALSCIENCES: 'Ciências Agrícolas',
  }
  return categories[category] || 'Ciências Agrícolas'
}

export const transformModality = (modality: Modality) => {
  const modalitys = {
    HYBRID: 'Híbrido',
    INPERSON: 'Presencial',
    ONLINE: 'Ead',
  }
  return modalitys[modality || 'HYBRID']
}
