import React from 'react'
import Header from './../Components/Header'
import Team from './../Components/Team'
import History from './../Components/History'
import Footer from './../Components/Footer'
import Seo from './../Components/Seo'

export default function about() {
    return (
        <div>
            <Seo title="About" />
            <Header />
            <Team />
            <History />
            <Footer />
        </div>
    )
}
