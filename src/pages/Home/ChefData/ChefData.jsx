import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../ChefCard/Card'

const ChefData = () => {
  const allChefData = useLoaderData()
  return (
    <div className='flex'>
      {allChefData.map(chefData => (
        <Card key={chefData.id} chefData={chefData}></Card>
      ))}
    </div>
  )
}

export default ChefData
