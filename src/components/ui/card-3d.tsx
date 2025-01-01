/* eslint-disable */
'use client'

import React, { createContext, useEffect, useRef, useState } from 'react'

import { cn } from '../../lib/utils'
import { useMouseEnter } from '../../hooks/mouse-enter'
import { useIsMobile } from '../../hooks/is-mobile'

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

type CardContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  perspective?: string
  children?: React.ReactNode
  containerClassName?: string
}

const CardContainer = React.forwardRef<HTMLDivElement, CardContainerProps>(
  ({ perspective = '600px', children, className, containerClassName, style, ...props }, ref) => {
    const isMobile = useIsMobile()
    const containerRef = useRef<HTMLDivElement>(null)
    const [isMouseEntered, setIsMouseEntered] = useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left - width / 2) / 25
      const y = (e.clientY - top - height / 2) / 25
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
    }

    const handleMouseEnter = () => {
      setIsMouseEntered(true)
      if (!containerRef.current) return
    }

    const handleMouseLeave = () => {
      if (!containerRef.current) return
      setIsMouseEntered(false)
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
    }

    const mouseEvents = {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseMove: handleMouseMove
    }

    return (
      <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
        <div
          className={cn('flex h-full items-center justify-center', containerClassName)}
          style={{
            perspective: isMobile ? 'none' : perspective,
            ...style
          }}
          ref={ref}
          {...props}
        >
          <div
            ref={containerRef}
            className={cn(
              'relative flex items-center justify-center transition-all duration-200 ease-linear',
              className
            )}
            style={{
              transformStyle: 'preserve-3d'
            }}
            {...(!isMobile ? { ...mouseEvents } : {})}
          >
            {children}
          </div>
        </div>
      </MouseEnterContext.Provider>
    )
  }
)

CardContainer.displayName = 'CardContainer'

const CardBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        'size-fit [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]',
        className
      )}
    >
      {children}
    </div>
  )
}

const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType
  children?: React.ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
  [key: string]: any
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useMouseEnter(MouseEnterContext)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleAnimations = () => {
      if (!ref.current || isMobile) return
      ref.current.style.transform = isMouseEntered
        ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
        : `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
    }
    handleAnimations()
  }, [isMouseEntered])

  return (
    <Tag ref={ref} className={cn('w-fit transition duration-200 ease-linear', className)} {...rest}>
      {children}
    </Tag>
  )
}

export { CardContainer, CardBody, CardItem }
