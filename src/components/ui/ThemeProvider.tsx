import { ThemeProvider as BaseThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <BaseThemesProvider {...props}>{children}</BaseThemesProvider>
}

ThemeProvider.displayName = 'ThemeProvider'
export default ThemeProvider
