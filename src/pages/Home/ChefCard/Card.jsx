import React from 'react'

const Card = ({ chefData }) => {
  const { img_url, name, years_of_experience, likes } = chefData
  return (
    <div className='card lg:card-side bg-base-100 shadow-xl'>
      <figure>
        <img src={img_url} alt='Album' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Listen</button>
        </div>
      </div>
    </div>
  )
}

export default Card
