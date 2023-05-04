import React from 'react'
import { useLoaderData } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'

const DetailedChefPage = () => {
  const detailedChef = useLoaderData()
  const { name, img_url, years_of_experience, likes, recipes, description } =
    detailedChef
  console.log(detailedChef)
  return (
    <div className='hero min-h-min w-11/12 mx-auto bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src={img_url} className='max-w-sm rounded-lg shadow-2xl' />
        <div>
          <h1 className='text-5xl font-bold'>{name}</h1>
          <p className='py-6'>{description}</p>
          <p>Likes: {likes}</p>
          <p>No of recipes: {recipes.length}</p>
          <p>Years of experience: {years_of_experience}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailedChefPage
