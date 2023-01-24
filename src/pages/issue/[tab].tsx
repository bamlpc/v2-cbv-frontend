// ** Next Import
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import UserProfile from 'src/views/pages/issue/UserProfile'

// ** Types
import { UserProfileActiveTab } from 'src/@fake-db/types'

const UserProfileTab = ({ tab, data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <UserProfile tab={tab} data={data} />
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { tab: ['main'] } },
      { params: { tab: 'details' } },
      { params: { tab: 'tests' } },
      { params: { tab: 'references' } }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.get('/pages/profile', { params: { tab: params?.tab } })
  const data: UserProfileActiveTab = res.data

  return {
    props: {
      data,
      tab: params?.tab
    }
  }
}

UserProfileTab.authGuard = false

export default UserProfileTab
