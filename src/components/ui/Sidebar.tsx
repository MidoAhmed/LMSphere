import { useState } from 'react'

import { Link } from '@tanstack/react-router'
import {
  BarChart2,
  Receipt,
  Building2,
  CreditCard,
  Folder,
  Wallet,
  Users2,
  Shield,
  MessagesSquare,
  Video,
  Settings,
  HelpCircle,
  Menu,
  Home,
} from 'lucide-react'

interface NavItemProps {
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  handleNavigation: () => void
}

const NavItem = ({
  href,
  icon: Icon,
  children,
  handleNavigation,
}: NavItemProps) => {
  return (
    <Link
      to={href}
      onClick={handleNavigation}
      className="flex items-center px-3 py-2 text-sm rounded-md transition-colors text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
    >
      <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
      {children}
    </Link>
  )
}
NavItem.displayName = 'NavItem'

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavigation = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <button
        aria-label="Toggle Menu"
        type="button"
        className="lg:hidden fixed top-4 left-4 z-[70] p-2 rounded-lg bg-white dark:bg-[#0F0F12] shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      <nav
        className={`
                fixed inset-y-0 left-0 z-[70] w-64 bg-white dark:bg-[#0F0F12] transform transition-transform duration-200 ease-in-out
                lg:translate-x-0 lg:static lg:w-64 border-r border-gray-200 dark:border-[#1F1F23]
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
      >
        <div className="h-full flex flex-col">
          <Link
            to="/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 px-6 flex items-center border-b border-gray-200 dark:border-[#1F1F23]"
          >
            <div className="flex items-center gap-3">
              <img
                src="https://kokonutui.com/logo.svg"
                alt="Acme"
                width={32}
                height={32}
                className="flex-shrink-0 hidden dark:block"
              />
              <img
                src="https://kokonutui.com/logo-black.svg"
                alt="Acme"
                width={32}
                height={32}
                className="flex-shrink-0 block dark:hidden"
              />
              <span className="text-lg font-semibold hover:cursor-pointer text-gray-900 dark:text-white">
                KokonutUI
              </span>
            </div>
          </Link>

          <div className="flex-1 overflow-y-auto py-4 px-4">
            <div className="space-y-6">
              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Overview
                </div>
                <div className="space-y-1">
                  <NavItem
                    href="#"
                    icon={Home}
                    handleNavigation={handleNavigation}
                  >
                    Dashboard
                  </NavItem>
                  <NavItem
                    href="#"
                    icon={BarChart2}
                    handleNavigation={handleNavigation}
                  >
                    Analytics
                  </NavItem>
                  <NavItem
                    href="#"
                    icon={Building2}
                    handleNavigation={handleNavigation}
                  >
                    Organization
                  </NavItem>
                  <NavItem
                    href="#"
                    icon={Folder}
                    handleNavigation={handleNavigation}
                  >
                    Projects
                  </NavItem>
                </div>
              </div>

              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Finance
                </div>
                <div className="space-y-1">
                  <NavItem
                    href="#"
                    icon={Wallet}
                    handleNavigation={handleNavigation}
                  >
                    Transactions
                  </NavItem>
                  <NavItem
                    href="#"
                    icon={Receipt}
                    handleNavigation={handleNavigation}
                  >
                    Invoices
                  </NavItem>
                  <NavItem
                    href="#"
                    icon={CreditCard}
                    handleNavigation={handleNavigation}
                  >
                    Payments
                  </NavItem>
                </div>
              </div>

              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Team
                </div>
                <div className="space-y-1">
                  <NavItem
                    href="#"
                    icon={Users2}
                    handleNavigation={handleNavigation}
                  >
                    Members
                  </NavItem>
                  <NavItem
                    href="#"
                    icon={Shield}
                    handleNavigation={handleNavigation}
                  >
                    Permissions
                  </NavItem>
                  <NavItem
                    href="#"
                    icon={MessagesSquare}
                    handleNavigation={handleNavigation}
                  >
                    Chat
                  </NavItem>
                  <NavItem
                    href="#"
                    icon={Video}
                    handleNavigation={handleNavigation}
                  >
                    Meetings
                  </NavItem>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]">
            <div className="space-y-1">
              <NavItem
                href="#"
                icon={Settings}
                handleNavigation={handleNavigation}
              >
                Settings
              </NavItem>
              <NavItem
                href="#"
                icon={HelpCircle}
                handleNavigation={handleNavigation}
              >
                Help
              </NavItem>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

Sidebar.displayName = 'Sidebar'
export default Sidebar
