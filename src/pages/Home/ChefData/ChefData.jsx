import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../ChefCard/Card'
// import '~slick-carousel/slick/slick.css'
// import '~slick-carousel/slick/slick-theme.css'
const ChefData = () => {
  const allChefData = useLoaderData()
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 sm:w-10/12 md:w-3/4 mx-auto'>
      {allChefData.map(chefData => (
        <Card key={chefData.id} chefData={chefData}></Card>
      ))}
    </div>
  )
}

export default ChefData
