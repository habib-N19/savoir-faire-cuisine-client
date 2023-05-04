import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ chefData }) => {
  const { id, img_url, name, years_of_experience, likes, recipes } = chefData
  return (
    <div className='card w-full sm:w-11/12 md:w-11/12 glass mx-auto'>
      <figure>
        <img src={img_url} alt='car!' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>Experience{years_of_experience}</p>
        <p>No of recipes: {recipes.length}</p>
        <p>Total Likes:{likes}</p>
        <div className='card-actions justify-end'>
          <Link to={`/chefData/${id}`}>
            <button className='btn btn-primary'>View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
