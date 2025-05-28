import { createRoute, Outlet } from '@tanstack/react-router'

import AssignedCourses from '@/pages/AssignedCourses/AssignedCourses'

function createRoutes(parentRoute: any) {
  const homeRoute = createRoute({
    getParentRoute: () => parentRoute,
    path: 'home',
    component: () => (
      <>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="mb-4">
          Welcome to your dashboard! Here you can manage your courses, track
          your progress, and view your certificates.
        </p>
        <p className="mb-4">
          Use the links below to navigate to different sections of your
          dashboard.
        </p>
        <p className="mb-4">
          This is a protected route, accessible only to authenticated users.
        </p>
        <Outlet />
      </>
    ),
  })

  const assignedCoursesRoute = createRoute({
    getParentRoute: () => homeRoute,
    path: 'assigned-courses',
    component: AssignedCourses,
  })

  return homeRoute.addChildren([assignedCoursesRoute])
}

export default createRoutes
