import React, { useEffect, useState } from 'react'

// Define the breakpoint for mobile devices
const MOBILE_BREAKPOINT = 768

/**
 * Custom hook to determine if the current device is mobile based on the window width.
 * It uses a media query to check if the width is less than the defined MOBILE_BREAKPOINT.
 *
 * @returns {boolean} Returns true if the device is mobile, false otherwise.
 */
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean | undefined>()

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}

export default useIsMobile
