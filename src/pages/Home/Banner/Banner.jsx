import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div
      className='hero min-h-screen mb-20 mx-auto'
      style={{
        backgroundImage: `url("banner.jpg")`
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
          <p className='mb-5 font-semibold text-2xl'>
            Discover the Art of French Cooking: Join Our Passionate Community of
            Chefs and Foodies
          </p>
          <Link to='/login'>
            <button className='btn btn-primary'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
