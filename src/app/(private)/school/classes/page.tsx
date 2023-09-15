'use client'
import { PageHeader } from '@components'
import { ClassesTable } from './components'

export default function Classes() {
  return (
    <>
      <PageHeader title="Turmas" description="Crie e gerencie suas turmas" />
      <ClassesTable />
    </>
  )
}
