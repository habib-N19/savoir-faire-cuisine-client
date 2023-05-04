import React from 'react'
import NavigationBar from '../pages/Shared/navigationBar/NavigationBar'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home/Home/Home'
import Feedback from '../pages/Home/CustomerFeedbacks/Feeback'

const MainLayout = () => {
  return (
    <>
      <Outlet></Outlet>
      <Home></Home>
    </>
  )
}

export default MainLayout
