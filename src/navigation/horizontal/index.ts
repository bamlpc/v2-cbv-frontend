// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Home',
    path: '/home',
    action: 'read',
    subject: 'acl-page',
    icon: 'mdi:home-outline'
  },
  {
    title: 'CBV',
    path: '/issue/profile',
    icon: 'mdi:email-outline'
  },
  {
    title: 'Github',
    path: '/github',
    action: 'read',
    subject: 'acl-page',
    icon: 'mdi:shield-outline'
  },
  {
    title: 'Documentation',
    path: '/documentation',
    action: 'read',
    subject: 'acl-page',
    icon: 'mdi:shield-outline'
  },
  {
    title: 'API',
    path: '/api',
    action: 'read',
    subject: 'acl-page',
    icon: 'mdi:shield-outline'
  },
  {
    title: 'Data Flow Diagram',
    path: '/dfd',
    action: 'read',
    subject: 'acl-page',
    icon: 'mdi:shield-outline'
  },
  {
    title: 'About',
    path: '/about',
    action: 'read',
    subject: 'acl-page',
    icon: 'mdi:shield-outline'
  }
]

export default navigation
