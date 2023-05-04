import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../pages/Shared/navigationBar/NavigationBar'
import Footer from '../pages/Shared/Footer/Footer'

const LoginLayout = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default LoginLayout
