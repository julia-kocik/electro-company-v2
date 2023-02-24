import React from 'react'
import BlogSection from '../../sections/BlogSection/BlogSection'
import Contact from '../../sections/Contact/Contact'
import Header from '../../sections/Header/Header'
import Offer from '../../sections/Offer/Offer'
import Reviews from '../../sections/Reviews/Reviews'
import './Homepage.scss'

const Homepage = (): JSX.Element => {
  return (
      <div>
          <Header />
          <Offer />
          <BlogSection />
          <Reviews />
          <Contact/>
      </div>
  )
}

export default Homepage
