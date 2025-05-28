import ThemeProvider from '@/components/ui/ThemeProvider'

import Layout from '@/components/app/Layout'
import Content from '@/components/app/Content'

// This is The main component that wraps the entire application.
const App = () => {
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

export default App
