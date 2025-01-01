import { ExternalLink } from 'lucide-react'
import { forwardRef, HTMLAttributes } from 'react'

import { CardBody, CardContainer, CardItem } from '../../../components/ui/card-3d'
import { Large } from '../../../components/ui/typography'
import { cn } from '../../../lib/utils'

type Props = HTMLAttributes<HTMLDivElement> & {
  description: string
  image: { src: string; alt: string }
  // tags: string[]
  title: string
  url: string
}

const colors = ['#2563eb', '#ca8a04', '#16a34a', '#dc2626']

const Card3D = forwardRef<HTMLDivElement, Props>(
  ({ description, image, title, url, className, ...props }, ref) => {
    return (
      <CardContainer
  className={cn('h-full rounded-lg bg-[#E8EFFF] p-4 shadowCard border border-[#155EFC]', className)}
  ref={ref}
  {...props}
>
  <CardBody className="flex h-full flex-col">
    <CardItem translateZ="60">
      <img
        className="w-full rounded-lg"
        src={image.src}
        alt={image.alt}
        loading="lazy"
        width={417}
        height={235}
      />
    </CardItem>
    <CardItem className="mt-3" translateZ={20}>
    <Large>{title}</Large>
      {/* <a className="flex items-center gap-2" href={url} target="_blank" rel="noreferrer">
        <Large>{title}</Large>
        <ExternalLink className="size-4" />
      </a> */}
    </CardItem>
    <CardItem className="mb-4 mt-8 max-xl:text-sm" as="p" translateZ={20}>
      {description}
    </CardItem>
    {/* <CardItem as="p" className="mt-auto flex items-center gap-3" translateZ={20}>
      {tags?.map((tech, index) => (
        <strong key={tech} style={{ color: colors[index % 4] }} className="text-xs">
          #{tech}
        </strong>
      ))}
    </CardItem> */}
  </CardBody>
</CardContainer>
    )
  }
)

Card3D.displayName = 'Card3D'

export { Card3D }
