// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'mdi:email-outline'
    },
    {
      title: 'Github',
      path: '/github',
      icon: 'mdi:shield-outline'
    },
    {
      title: 'Documentation',
      path: '/documentation',
      icon: 'mdi:shield-outline'
    },
    {
      title: 'API',
      path: '/api',
      icon: 'mdi:shield-outline'
    },
    {
      title: 'Data Flow Diagram',
      path: '/dfd',
      icon: 'mdi:shield-outline'
    },
    {
      title: 'About',
      path: '/about',
      icon: 'mdi:shield-outline'
    }
  ]
}

export default navigation
