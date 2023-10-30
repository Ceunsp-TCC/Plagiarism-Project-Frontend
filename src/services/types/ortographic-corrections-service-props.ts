export type OrtographicCorrectionStatus = 'PROCESSING' | 'COMPLETED' | 'FAILED'

export type OrtographicCorrection = {
  id: number
  userProvidedIdentifier: string
  original: string
  result: string
  status: OrtographicCorrectionStatus
  createdAt: string
}

export type GetAllOrtographicCorrectionsProps = {
  currentPage?: number
  identifier?: string
}
