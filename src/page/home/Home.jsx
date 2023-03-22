import React from 'react'
import Slider from "../../components/slider/Slider"
import Feature from '../../components/feature/Feature'

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <Feature type="Feature"/>
      <Feature type="Trending"/>
    </div>
  )
}

export default Home