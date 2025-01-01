/* eslint-disable unicorn/prefer-ternary */
import { useEffect } from 'react'

export function useScrollLock(lock: boolean): void {
  useEffect(() => {
    if (lock)
      document.body.style.overflow = 'hidden' // Disable scrolling
    else document.body.style.overflow = '' // Restore scrolling

    return () => {
      document.body.style.overflow = '' // Cleanup on unmount
    }
  }, [lock])
}
