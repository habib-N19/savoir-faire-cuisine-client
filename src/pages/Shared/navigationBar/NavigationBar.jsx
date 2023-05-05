import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.error(error))
  }
  return (
    <div className='navbar bg-base-100 flex-col sm:flex-row'>
      <div className='flex-1'>
        <Link
          to='/'
          className='btn btn-ghost normal-case animate-pulse font-bold text-xl'
        >
          Savoir Faire Cuisine
        </Link>
      </div>
      <div className='flex-1'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'btn btn-primary normal-case font-bold text-xl tracking-wide transition-colors duration-300'
              : 'btn btn-ghost normal-case font-semibold tracking-wide text-xl'
          }
        >
          Home
        </NavLink>
      </div>
      <div className='flex-1'>
        <NavLink
          to='/blog'
          className={({ isActive }) =>
            isActive
              ? 'btn btn-primary normal-case font-bold text-xl tracking-wide transition-colors duration-300'
              : 'btn btn-ghost normal-case font-semibold tracking-wide text-xl'
          }
        >
          Blog
        </NavLink>
      </div>
      {user ? (
        <div onClick={handleLogOut} className='btn btn-ghost'>
          Logout
        </div>
      ) : (
        <NavLink
          to='/login'
          className={({ isActive }) =>
            isActive
              ? 'btn btn-primary normal-case font-bold text-xl tracking-wide transition-colors duration-300'
              : 'btn btn-ghost normal-case font-semibold tracking-wide text-xl'
          }
        >
          Login
        </NavLink>
      )}

      <div className=' w-10 rounded-full'>
        <img
          src={user?.photoURL}
          title={user?.displayName}
          className='rounded-full'
          alt=''
        />
      </div>
    </div>
  )
}

export default NavigationBar
