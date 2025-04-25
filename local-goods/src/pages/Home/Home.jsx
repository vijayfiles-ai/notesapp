import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import SecondNavbar from '../../components/SecondNavbar/SecondNavbar'
import TitleCards from '../../components/TitleCards/TitleCards'
 import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <SecondNavbar />
      <TitleCards/>
      <Footer/>
      </div>
  )
}

export default Home
