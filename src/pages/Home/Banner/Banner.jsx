import React from 'react'
import bannerImage from '../../../assets/banner.jpg'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import './banner.css'
const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider)
  const aws = 'aws'

  return (
    <div className='card w-11/12 h-[300px] mx-auto my-16'>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        className={aws}
      >
        <h2 className=' text-center text-primary mx-auto text-4xl'>
          Discover the Art of French Cooking:
          <br /> Join Our Passionate Community of Chefs and Foodies
        </h2>
      </AutoplaySlider>
    </div>
  )
}

export default Banner
