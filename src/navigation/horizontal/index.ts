// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Home',
    path: '/home',
    icon: 'mdi:home-outline'
  },
  {
    title: 'CBV',
    path: '/issue/profile',
    icon: 'mdi:file-document-outline'
  },
  {
    title: 'Github',
    path: '/github',
    icon: 'mdi:github'
  },
  {
    title: 'Documentation',
    path: '/documentation',
    icon: 'mdi:book-open-blank-variant'
  },
  {
    title: 'API',
    path: 'https://cbv-api.deno.dev/',
    externalLink: true,
    openInNewTab: true,
    icon: 'mdi:graphql'
  },
  {
    title: 'Data Flow Diagram',
    path: '/dfd',
    icon: 'carbon:flow-connection'
  },
  {
    title: 'About',
    path: '/about',
    icon: 'mdi:information-outline'
  }
]

export default navigation
