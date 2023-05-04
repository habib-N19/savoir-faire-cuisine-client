import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DetailedChefPage = id => {
  const [favorites, setFavorites] = useState([])
  const AutoplaySlider = withAutoplay(AwesomeSlider)
  const detailedChef = useLoaderData()

  const handleToast = recipeId => {
    const foundRecipe = detailedChef.recipes.find(r => r.id === recipeId)
    if (!favorites.includes(recipeId)) {
      const newFavorites = [...favorites]
      newFavorites.push(recipeId)
      setFavorites(newFavorites)
      toast('Added to favorites')
    }
  }

  const { name, img_url, years_of_experience, likes, recipes, description } =
    detailedChef

  return (
    <>
      <div className='hero min-h-min w-11/12 mx-auto bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='h-full'>
            <LazyLoad>
              <img src={img_url} className='max-w-sm rounded-lg shadow-2xl' />
            </LazyLoad>
          </div>
          <div>
            <h1 className='text-5xl font-bold'>{name}</h1>
            <p className='py-6'>{description}</p>
            <p className='font-semibold mb-2'>Likes: {likes}</p>
            <p className='font-semibold mb-2'>
              No of recipes: {recipes.length}
            </p>
            <p className='font-semibold mb-2'>
              Years of experience: {years_of_experience}
            </p>
          </div>
        </div>
      </div>
      {/* recipe items */}
      <div className='bg-glass w-11/12 mx-auto'>
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={6000}>
          {recipes.map(r => (
            <div key={r.id}>
              <div className='card w-full min-h-full my-0 mx-auto bg-primary text-primary-content'>
                <div className='card-body min-h-full m-0'>
                  <h2 className='card-title text-black text-center mx-auto text-2xl'>
                    Recipe Name: {r.recipe_name}
                  </h2>
                  <div className='grid grid-cols-3 gap-3 p-4 px-10'>
                    <div className='col-span-1'>
                      {r.ingredients.map((ingredient, index) => (
                        <ul key={index}>
                          <li>{ingredient}</li>
                        </ul>
                      ))}
                    </div>
                    <p className='col-span-2'>{r.cooking_method}</p>
                  </div>
                  <p>Ratings: {r.rating}</p>
                  <div className='card-actions justify-end'>
                    <button
                      onClick={() => handleToast(r.id)}
                      className='btn text-secondary bg-primary'
                      disabled={favorites.includes(r.id)}
                    >
                      {favorites.includes(r.id)
                        ? 'Added to favorites'
                        : 'Add to favorite'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AutoplaySlider>
        <ToastContainer />
      </div>
    </>
  )
}

export default DetailedChefPage
