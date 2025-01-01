import { Context, useContext } from 'react'

export const useMouseEnter = (context: Context<any>) => {
  const _context = useContext(context)
  if (_context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider')
  }
  return _context
}
