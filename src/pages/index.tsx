import type { NextPage } from 'next'
import { useColorMode } from '@chakra-ui/color-mode'
import { Layout } from '../Components/Layout'
import { Header } from '../Components/Layout/Header'
import { Banner } from '../Components/Layout/Banner'
import { Travels } from '../Components/Layout/Travels'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Layout>
        <Header />
        <Banner />
        <Travels />
      </Layout>
    </>
  )
}

export default Home
