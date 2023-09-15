import {
  StudentsTable,
  ClassInformation,
} from '@/app/(private)/school/classes/[id]/components'

export default function Class() {
  return (
    <div>
      <ClassInformation />
      <StudentsTable />
    </div>
  )
}
