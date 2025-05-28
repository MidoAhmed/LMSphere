import { createRoute } from '@tanstack/react-router'
import AuthLayout from './auth.layout'
import Login from './auth.login'
import Register from './auth.register'

export default function createAuthRoutes(parentRoute: any) {
  const authRoute = createRoute({
    getParentRoute: () => parentRoute,
    path: 'auth',
    component: AuthLayout,
  })

  const loginRoute = createRoute({
    getParentRoute: () => authRoute,
    path: 'login',
    component: Login,
  })

  const registerRoute = createRoute({
    getParentRoute: () => authRoute,
    path: 'register',
    component: Register,
  })

  return authRoute.addChildren([loginRoute, registerRoute])
}
