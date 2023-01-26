// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** Types
import { ProfileHeaderType, ProjectTableRowType } from 'src/@fake-db/types'

type DataCBV = {
  main: string
  details: string
  tests: string
  references: string
}
interface DataType {
  profileHeader: ProfileHeaderType
  main: string
  details: string
  tests: string
  references: string
}

const data: DataType = {
  profileHeader: {
    fullName: 'John Doe',
    location: 'Vatican City',
    joiningDate: 'April 2021',
    designation: 'UX Designer',
    profileImg: '/images/avatars/1.png',
    designationIcon: 'mdi:fountain-pen-tip',
    coverImg: '/images/pages/profile-banner.png'
  },
  cbv: {
    main: 'cbv.main field',
    details: 'cbv.details field',
    tests: 'cbv.tests field',
    references: 'cbv.references field'
  }
}

mock.onGet('/pages/profile').reply(config => {
  const { cbv = '' } = config.params ?? ''

  // @ts-ignore
  return [200, data[cbv.tab]]
})

mock.onGet('/pages/profile-header').reply(() => {
  return [200, data.profileHeader]
})

const projectTable: ProjectTableRowType[] = [
  {
    id: 1,
    status: 38,
    leader: 'Eileen',
    name: 'Website SEO',
    date: '10 may 2021',
    avatarColor: 'success',
    avatarGroup: ['/images/avatars/1.png', '/images/avatars/2.png', '/images/avatars/3.png', '/images/avatars/4.png']
  },
  {
    id: 2,
    status: 45,
    leader: 'Owen',
    date: '03 Jan 2021',
    name: 'Social Banners',
    avatar: '/images/icons/project-icons/social-label.png',
    avatarGroup: ['/images/avatars/5.png', '/images/avatars/6.png']
  },
  {
    id: 3,
    status: 92,
    leader: 'Keith',
    date: '12 Aug 2021',
    name: 'Logo Designs',
    avatar: '/images/icons/project-icons/sketch-label.png',
    avatarGroup: ['/images/avatars/7.png', '/images/avatars/8.png', '/images/avatars/1.png', '/images/avatars/2.png']
  },
  {
    id: 4,
    status: 56,
    leader: 'Merline',
    date: '19 Apr 2021',
    name: 'IOS App Design',
    avatar: '/images/icons/project-icons/sketch-label.png',
    avatarGroup: ['/images/avatars/3.png', '/images/avatars/4.png', '/images/avatars/5.png', '/images/avatars/6.png']
  },
  {
    id: 5,
    status: 25,
    leader: 'Harmonia',
    date: '08 Apr 2021',
    name: 'Figma Dashboards',
    avatar: '/images/icons/project-icons/figma-label.png',
    avatarGroup: ['/images/avatars/7.png', '/images/avatars/8.png', '/images/avatars/1.png']
  },
  {
    id: 6,
    status: 36,
    leader: 'Allyson',
    date: '29 Sept 2021',
    name: 'Crypto Admin',
    avatar: '/images/icons/project-icons/html-label.png',
    avatarGroup: ['/images/avatars/2.png', '/images/avatars/3.png', '/images/avatars/4.png', '/images/avatars/5.png']
  },
  {
    id: 7,
    status: 72,
    leader: 'Georgie',
    date: '20 Mar 2021',
    name: 'Create Website',
    avatar: '/images/icons/project-icons/react-label.png',
    avatarGroup: ['/images/avatars/6.png', '/images/avatars/7.png', '/images/avatars/8.png', '/images/avatars/1.png']
  },
  {
    id: 8,
    status: 89,
    leader: 'Fred',
    date: '09 Feb 2021',
    name: 'App Design',
    avatar: '/images/icons/project-icons/xd-label.png',
    avatarGroup: ['/images/avatars/2.png', '/images/avatars/3.png', '/images/avatars/4.png', '/images/avatars/5.png']
  },
  {
    id: 9,
    status: 77,
    leader: 'Richardo',
    date: '17 June 2021',
    name: 'Angular APIs',
    avatar: '/images/icons/project-icons/figma-label.png',
    avatarGroup: ['/images/avatars/6.png', '/images/avatars/7.png', '/images/avatars/8.png', '/images/avatars/1.png']
  },
  {
    id: 10,
    status: 100,
    leader: 'Genevra',
    date: '06 Oct 2021',
    name: 'Admin Template',
    avatar: '/images/icons/project-icons/vue-label.png',
    avatarGroup: ['/images/avatars/2.png', '/images/avatars/3.png', '/images/avatars/4.png', '/images/avatars/5.png']
  }
]

mock.onGet('/pages/profile-table').reply(config => {
  const { q = '' } = config.params ?? ''
  const queryLowered = q.toLowerCase()
  const filteredData = projectTable.filter(row => {
    return (
      row.name.toLowerCase().includes(queryLowered) ||
      row.date.toLowerCase().includes(queryLowered) ||
      row.leader.toLowerCase().includes(queryLowered)
    )
  })

  return [200, filteredData]
})
