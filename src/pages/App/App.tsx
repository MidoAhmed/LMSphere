import { withAuthenticationRequired } from '@auth0/auth0-react'

import ThemeProvider from '@/components/ui/ThemeProvider'

import Layout from '@/components/app/Layout'
import Content from '@/components/app/Content'

// This is The main component that wraps the entire application.
const UnProtectedApp = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Layout>
        <Content />
      </Layout>
    </ThemeProvider>
  )
}

const App = withAuthenticationRequired(UnProtectedApp)
export default App
