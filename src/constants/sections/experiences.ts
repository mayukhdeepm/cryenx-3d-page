import { BriefcaseBusiness } from 'lucide-react'

import { IconQuestionMark } from '@/components/icons/question-mark'

type ExperiencesConfig = {
  role: string
  company: string
  descriptions: string[]
  date?: string
  icon?: ({ className }: any) => any
}

const experiencesConfig: ExperiencesConfig[] = [
  {
    role: 'Software intern',
    company: 'Regex telecommunication',
    descriptions: [
      'In the 11th grade, my internship at Regex Telecommunications began.',
      'Initially, I worked on web-based projects using HTML, CSS, JS, and Angular.',
      'Later on, I expanded my skills to include C# and SQL.',
      'Through continuous self-improvement, I crafted aesthetically pleasing designs and developed functional programs.'
    ],
    date: 'September 2020 - July 2021',
    icon: BriefcaseBusiness
  },
  {
    role: 'Next?',
    company: 'Care to collaborate?',
    descriptions: [
      'I possess expertise in developing web applications using React.js and Next.js, with a focus on creating visually appealing websites.',
      'I excel in crafting MERN applications, utilizing Node.js and Express.js for robust backend development.',
      'Overall, I am well-versed in both front-end and back-end technologies, ensuring comprehensive and effective web development.'
    ],
    icon: IconQuestionMark
  }
]

export { experiencesConfig, type ExperiencesConfig }
