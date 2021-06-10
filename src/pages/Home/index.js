import React from 'react'
import {Navbar, Hero, Section, Services, Contact, Footer} from "../../components"
import { sectionObjOne } from "../../components/moleculs/Data"

const Home = () => {

    return (
        <div>
            <Navbar />
            <Hero />
            <Section {...sectionObjOne} />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
