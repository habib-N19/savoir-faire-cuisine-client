import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../pages/Shared/Loading/Loading'

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return <Loading />
  }
  if (user) {
    return children
  }
  return <Navigate state={{ from: location }} to='/login' replace></Navigate>
}

export default PrivateRoutes
