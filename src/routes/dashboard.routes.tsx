import { createRoute } from '@tanstack/react-router'
import DashboardLayout from './dashboard.layout'
import AssignedCourses from './dashboard.assigned-courses'
import MyProgress from './dashboard.my-progress'
import CertificateHistory from './dashboard.certificate-history'

export default function createDashboardRoutes(parentRoute: any) {
  const dashboardRoute = createRoute({
    getParentRoute: () => parentRoute,
    path: 'dashboard',
    component: DashboardLayout,
  })

  const assignedCoursesRoute = createRoute({
    getParentRoute: () => dashboardRoute,
    path: 'assigned-courses',
    component: AssignedCourses,
  })

  const myProgressRoute = createRoute({
    getParentRoute: () => dashboardRoute,
    path: 'my-progress',
    component: MyProgress,
  })

  const certificateHistoryRoute = createRoute({
    getParentRoute: () => dashboardRoute,
    path: 'certificate-history',
    component: CertificateHistory,
  })

  return dashboardRoute.addChildren([
    assignedCoursesRoute,
    myProgressRoute,
    certificateHistoryRoute,
  ])
}
