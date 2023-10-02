export const appRoutes = {
  private: {
    home: '/home',
    students: '/school/students',
    teachers: '/school/teachers',
    lessons: '/lessons',
    schoolCourses: '/school/courses',
    schoolCourse: (courseId: number) => `/school/courses/${courseId}`,
    classes: '/school/classes',
    class: (classId: number) => `/school/classes/${classId}`,
  },
  public: {
    login: '/login',
    landingPage: '/',
  },
}
