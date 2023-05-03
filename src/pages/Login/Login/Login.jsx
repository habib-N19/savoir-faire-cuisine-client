import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'

const Login = () => {
  const { signIn } = useContext(AuthContext)
  const handleLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
      })
      .catch(error => console.error(error))
  }
  return (
    <div className='bg-base-100 w-9/12 sm:w-1/3 mx-auto'>
      <h3 className='text-center text-3xl mb-12'>Please Login</h3>
      <form onSubmit={handleLogin} className='mx-auto'>
        <div className='form-control w-full max-w-xs mb-6'>
          <input
            type='email'
            name='email'
            placeholder='enter your Email'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <input
            type='password'
            name='password'
            placeholder='enter your password'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <input type='submit' value='Login' className='btn btn-outline my-4 ' />
        <div>
          <span>
            Don't have an account? Please <Link to='/register'>Register</Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login
