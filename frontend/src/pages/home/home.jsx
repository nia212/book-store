import React from 'react'
import Banner from './banner'
import TopSellers from './topSellers.jsx'
import Recommened from './recommended.jsx'
import News from './news'

const Home = () => {
  return (
    <>
        <Banner/>
        <TopSellers/>
        <Recommened/>
        <News/>
    </>
  )
}

export default Home