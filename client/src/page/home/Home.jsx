import React from 'react'
import Slider from "../../components/slider/Slider"
import Feature from '../../components/feature/Feature'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <Feature type="featured"/>
      <Categories/>
      <Feature type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home