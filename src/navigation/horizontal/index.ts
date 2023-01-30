// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Home',
    path: '/home',
    icon: 'mdi:home-outline'
  },
  {
    title: 'Vulnerabilities List',
    path: '/list',
    icon: 'mdi:file-document-outline'
  },
  {
    title: 'Attack Techniques',
    path: 'https://hacken-3.gitbook.io/l1-security/',
    icon: 'mdi:file-document-alert-outline',
    externalLink: true,
    openInNewTab: true
  },
  {
    title: 'Documentation',
    path: '/documentation',
    icon: 'mdi:book-open-blank-variant'
  }
]

export default navigation
