import * as React from "react"
import Header from './../Components/Header'
import Footer from './../Components/Footer'
import Welcome from './../Components/Welcome'
import Cta from '../Components/Cta'
import Videos from './../Components/Videos'
import Seo from './../Components/Seo'


const IndexPage = () => {
  return (
    <div>
      <Seo title="Home" />
      <Header />
      <Welcome />
      <Cta />
      <Videos />
      <Footer />
    </div>
  )
}

export default IndexPage
