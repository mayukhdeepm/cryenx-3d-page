/* eslint-disable react-refresh/only-export-components */
import React from 'react'

import { cn } from '../../lib/utils'

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'strong' | 'span'
}

const H1 = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  ({ as: Tag = 'h1', className, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(
          'scroll-m-20 text-5xl font-extrabold sm:text-5xl xl:text-6xl 2xl:text-7xl',
          className
        )}
        {...props}
      />
    )
  }
)

const H2 = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  ({ as: Tag = 'h2', className, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn('scroll-m-20 text-5xl font-extrabold xl:text-6xl', className)}
        {...props}
      />
    )
  }
)

const Large = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={cn('font-semibold xl:text-2xl', className)} {...props} />
  }
)

const Small = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return <small ref={ref} className={cn('font-medium max-xl:text-xs', className)} {...props} />
  }
)

const Ul = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => {
    return <ul ref={ref} className={cn('my-6', className)} {...props} />
  }
)

H1.displayName = 'H1'
H2.displayName = 'H2'
Large.displayName = 'Large'
Small.displayName = 'Small'
Ul.displayName = 'Ul'

export { H1, H2, Large, Small, Ul }
