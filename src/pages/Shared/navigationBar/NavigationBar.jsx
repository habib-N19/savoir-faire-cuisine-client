import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.error(error))
  }
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case font-bold text-xl'>
          Savoir Faire Cuisine
        </Link>
      </div>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case font-bold text-xl'>
          Home
        </Link>
      </div>
      <div className='flex-1'>
        <Link
          to='/blog'
          className='btn btn-ghost normal-case font-bold text-xl'
        >
          Blog
        </Link>
      </div>
      {user ? (
        <div onClick={handleLogOut} className='btn btn-ghost'>
          Logout
        </div>
      ) : (
        <Link to='/login'>
          <div className='btn btn-ghost'>Login</div>
        </Link>
      )}

      <div className=' w-10 rounded-full'>
        <img src={user?.image} alt='' />
      </div>
    </div>
  )
}

export default NavigationBar
