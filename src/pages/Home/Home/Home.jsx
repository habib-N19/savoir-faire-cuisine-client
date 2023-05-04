import React from 'react'
import ChefData from '../ChefData/ChefData'
import Banner from '../Banner/Banner'
import Feedback from '../CustomerFeedbacks/Feeback'
import Promotion from '../Promotion/Promotion'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefData></ChefData>
      <Feedback></Feedback>
      <Promotion></Promotion>
    </div>
  )
}

export default Home
