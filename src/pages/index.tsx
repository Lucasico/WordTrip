import type { NextPage } from 'next'
import { Layout } from '../Components/Layout'
import { Header } from '../Components/Layout/Header'
import { Banner } from '../Components/Layout/Banner'
import { Travels } from '../Components/Layout/Travels'
import { LetsGo } from '../Components/Layout/LetsGo'
import { Continets }  from '../Components/Layout/Continets'
import { Footer } from '../Components/Layout/Footer/Footer'

const Home: NextPage = () => {

  return (
    <>
      <Layout>
        <Header />
        <Banner />
        <Travels />
        <LetsGo />
        <Continets />
        <Footer />
      </Layout>
    </>
  )
}

export default Home
