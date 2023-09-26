'use client'
import { PageHeader } from '@components'
import { LessonsTable } from './components'

export default function Lessons() {
  return (
    <>
      <PageHeader title="Aulas" description="Aqui encontrará suas aulas" />
      <LessonsTable />
    </>
  )
}
