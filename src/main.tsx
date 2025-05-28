import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Auth0Provider } from '@auth0/auth0-react'
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import createRoutes from './routes/routes.tsx'
import TanStackQueryLayout from './integrations/tanstack-query/layout.tsx'
import * as TanStackQueryProvider from './integrations/tanstack-query/root-provider.tsx'
import './styles/styles.css'
import reportWebVitals from './reportWebVitals.ts'
import App from './pages/App/App.tsx'
import { getAuth0Config } from '@/config/authConfig'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <TanStackQueryLayout />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => {
    return <App />
  },
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  createRoutes(rootRoute),
])

const router = createRouter({
  routeTree,
  context: {
    ...TanStackQueryProvider.getContext(),
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Please see https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html
// for a full list of the available properties on the provider
const config = getAuth0Config()

const auth0ProviderConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback: (appState: any) => {
    // Use the appState to redirect the user after login
    router.navigate({
      to: (appState && appState.returnTo) || window.location.pathname
    });
  },
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
}

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <TanStackQueryProvider.Provider>
        <Auth0Provider {...auth0ProviderConfig}>
          <RouterProvider router={router} />
        </Auth0Provider>
      </TanStackQueryProvider.Provider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
