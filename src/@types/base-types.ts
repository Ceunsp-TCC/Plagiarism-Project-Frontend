import { permissionsUrls } from '@constants'

export type DefaultResponse = {
  statusCode: number
  message: string
}

export type DefaultResponseWithContent<TContent> = DefaultResponse & {
  content: TContent
}

export type DefaultPaginate<TItems> = {
  currentPage: number
  totalRegisters: number
  totalPages: number
  registersPerPage: number
  items: TItems[]
}
export type FormType = 'VIEW' | 'EDIT' | 'CREATE'

export type Permissions =
  | 'createPermission'
  | 'deletePermission'
  | 'updatePermission'
  | 'viewPermission'
  | 'createRole'
  | 'updateRole'
  | 'viewRole'
  | 'deleteRole'
  | 'syncRolesPermissions'
  | 'teachers'
  | 'createTeacher'
  | 'getTeachers'
  | 'students'
  | 'createStudent'
  | 'getStudents'
  | 'courses'
  | 'createCourse'
  | 'getCourses'
  | 'getCourse'
  | 'createSemester'
  | 'createLesson'
  | 'classes'
  | 'createClass'
  | 'getClasses'
  | 'getClass'
  | 'getStudentsByClass'
  | 'linkTeacherAndLessonInClass'

export type Paths = keyof typeof permissionsUrls

export type StatusOtherUsers = 'ACTIVE' | 'INACTIVE'

export type Role = 'SCHOOL' | 'ADMIN' | 'TEACHER' | 'STUDENT'

export type Modality = 'HYBRID' | 'INPERSON' | 'ONLINE'

export type CourseCategory =
  | 'NATURALSCIENCES'
  | 'SOCIALSCIENCES'
  | 'ARTSHUMANITIES'
  | 'INFORMATIONTECHNOLOGY'
  | 'ENGINEERING'
  | 'BUSINESSADMINISTRATION'
  | 'HEALTHMEDICINE'
  | 'EDUCATION'
  | 'LAW'
  | 'COMMUNICATIONJOURNALISM'
  | 'ENVIRONMENTSUSTAINABILITY'
  | 'PSYCHOLOGY'
  | 'ARCHITECTUREURBANPLANNING'
  | 'MARKETING'
  | 'AGRICULTURALSCIENCES'
export type Cases = 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFORMATION'
