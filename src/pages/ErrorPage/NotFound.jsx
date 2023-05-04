import React from 'react'
import Lottie from 'lottie-react'
import errorAnimation from '../../assets/4339-not-found.json'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
      <Lottie
        className='w-8/12 h-[400px] mx-auto'
        animationData={errorAnimation}
        loop={true}
      />
      <div className='max-w-md text-center mx-auto mt-16 '>
        <Link to='/' className='btn btn-outline py-10 font-bold'>
          Back to homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound
