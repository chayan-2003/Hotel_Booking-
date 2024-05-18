import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <div class="bg-cyan-600 h-fit  ">

        <Navbar />
        <Header />

      </div>
      <div className="HomeContainer">
        <Featured />
        <h1 className="homeTitle mt-8 ml-44 my-5 text-2xl font-bold">Browse By property types</h1>
        <PropertyList/>
        <h1 className="homeTitle mt-8 ml-44 my-5 text-2xl font-bold">Home guests love</h1>
        <FeaturedProperties />
        <MailList/>
        <Footer/>
      </div>

    </div>

  )
}
export default Home