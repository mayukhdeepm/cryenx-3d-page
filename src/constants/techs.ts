import { IconExpressjs } from '@/components/icons/techs/expressjs'
import { IconFigma } from '@/components/icons/techs/figma'
import { IconFramerMotion } from '@/components/icons/techs/framer-motion'
import { IconMongodb } from '@/components/icons/techs/mongodb'
import { IconNextjs } from '@/components/icons/techs/nextjs'
import { IconReact } from '@/components/icons/techs/react'
import { IconTailwindcss } from '@/components/icons/techs/tailwindcss'

type TechsConfig = {
  icon?: ({ className }: any) => any
  title: string
}

const techsConfig: TechsConfig[] = [
  {
    title: 'React',
    icon: IconReact
  },
  {
    title: 'Next.js',
    icon: IconNextjs
  },
  {
    title: 'Express.js',
    icon: IconExpressjs
  },
  {
    title: 'Figma',
    icon: IconFigma
  },
  {
    title: 'TailwindCSS',
    icon: IconTailwindcss
  },
  {
    title: 'Framer Motion',
    icon: IconFramerMotion
  },

  {
    title: 'MongoDB',
    icon: IconMongodb
  }
]

export { techsConfig, type TechsConfig }
