import React from 'react'
import { Link } from 'react-router-dom'

const Promotion = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content w-11/12 mx-auto flex-col lg:flex-row-reverse'>
        <div>
          <h1 className='text-5xl font-bold mb-4'>Grab your deal!</h1>
          <p className='py-6'>
            "Enjoy 35% on your next meal when you dine with us! Use promo code
            [66FEBSS] when making your reservation or placing your order online
            to redeem this offer. Or, try our limited-time menu item, [insert
            menu item name], available for a limited time only. Come in today
            and treat yourself to a delicious meal and great savings. We look
            forward to serving you!"
          </p>
          <Link to='/login'>
            <button className='btn btn-primary'>Order now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Promotion
