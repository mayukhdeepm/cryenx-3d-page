import { Variants } from 'framer-motion'

type Directions = '' | 'left' | 'right' | 'up' | 'down'
type Types = 'tween' | 'spring' | 'inertia'
type ease = 'easeIn' | 'easeOut' | 'easeInOut'

type FadeInProps = {
  direction?: Directions
  directionAmount?: number
  type?: Types
  delay?: number
  duration?: number
  ease?: ease
}

const fadeIn = ({
  direction = 'up',
  directionAmount = 50,
  type = 'spring',
  delay = 0.1,
  duration = 1.25,
  ease
}: FadeInProps) => {
  return {
    initial: {
      x: direction === 'left' ? -directionAmount : direction === 'right' ? directionAmount : 0,
      y: direction === 'up' ? -directionAmount : direction === 'down' ? directionAmount : 0,
      opacity: 0
    },
    animate: (time: number = 1) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay * time,
        duration: duration,
        ease: ease
      }
    })
  } as Variants
}

const variants = { fadeIn }

const showOnlyViewOnce = {
  viewport: {
    once: true,
    amount: 0.2
  },
  initial: 'initial',
  whileInView: 'animate'
}

export const motions = { variants, showOnlyViewOnce }
