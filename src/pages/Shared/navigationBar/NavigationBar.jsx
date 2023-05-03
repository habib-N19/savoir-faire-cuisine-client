import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case font-bold text-xl'>
          Savoir Faire Cuisine
        </Link>
      </div>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case font-bold text-xl'>
          Home
        </Link>
      </div>
      <div className='flex-1'>
        <Link
          to='/blog'
          className='btn btn-ghost normal-case font-bold text-xl'
        >
          Blog
        </Link>
      </div>
      <div className=' w-10 rounded-full'>
        <img src='/src/assets/react.svg' alt='' />
      </div>
    </div>
  )
}

export default NavigationBar
