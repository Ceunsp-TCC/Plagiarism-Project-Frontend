export const appRoutes = {
  private: {
    home: '/home',
    students: '/school/students',
    teachers: '/school/teachers',
    schoolCourses: '/school/courses',
    schoolCourse: (courseId: number) => `/school/courses/${courseId}`,
  },
  public: {
    login: '/login',
    landingPage: '/',
  },
}
