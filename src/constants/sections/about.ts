import assets from '@/assets'

const icons = assets.serviceIcons

type AboutConfig = {
  description: string
  roles: {
    image: string
    text: string
  }[]
  quote: string
}

const aboutConfig: AboutConfig = {
  description:
    'With a keen understanding of the full stack, I am capable of developing end-to-end web applications that deliver a seamless user experience. My commitment to staying updated with the latest industry trends ensures that I can leverage cutting-edge technologies to create modern and efficient web solutions.',
  roles: [
    {
      image: icons.web,
      text: 'Full Stack Web Developer'
    },
    {
      image: icons.creator,
      text: 'Javascript Developer'
    },
    {
      image: icons.mobile,
      text: 'React.js Developer'
    },
    {
      image: icons.backend,
      text: 'Express.js Developer'
    }
  ],
  quote:
    'Behind every seamless user experience is a developer crafting code with precision and creativity.'
}

export { aboutConfig, type AboutConfig }
