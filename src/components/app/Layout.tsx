import { useEffect, useState } from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import { useTheme } from 'next-themes'
import type { ReactNode } from 'react'

import Sidebar from '@/components/ui/Sidebar'
import TopNav from '@/components/ui/TopNav'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { logout } = useAuth0()

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`flex h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Sidebar />
      <div className="w-full flex flex-1 flex-col">
        <header className="h-16 border-b border-gray-200 dark:border-[#1F1F23]">
          <TopNav onLogout={logoutWithRedirect} />
        </header>
        <main className="flex-1 overflow-auto p-6 bg-white dark:bg-[#0F0F12]">
          {children}
        </main>
      </div>
    </div>
  )
}

Layout.displayName = 'Layout'

export default Layout
