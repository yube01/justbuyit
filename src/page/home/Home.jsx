import React from 'react'
import Slider from "../../components/slider/Slider"
import Feature from '../../components/feature/Feature'
import Categories from '../../components/categories/Categories'

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <Feature type="Feature"/>
      <Categories/>
      <Feature type="Trending"/>
    </div>
  )
}

export default Home