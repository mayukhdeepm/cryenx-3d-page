type MenuLinks = 'main' | 'about' | 'experience' | 'projects' | 'contact'

type MenuLinkConfig = {
  name: string
  link: MenuLinks
  showNav?: boolean
}

const menuLinkConfig = {
  main: { name: 'Homepage', link: 'main' },
  about: { name: 'About', link: 'about', showNav: true },
  experience: { name: 'Experience', link: 'experience', showNav: true },
  projects: { name: 'Projects', link: 'projects' },
  contact: { name: 'Contact', link: 'contact', showNav: true }
} satisfies Record<string, MenuLinkConfig>

export { menuLinkConfig, type MenuLinkConfig, type MenuLinks }
