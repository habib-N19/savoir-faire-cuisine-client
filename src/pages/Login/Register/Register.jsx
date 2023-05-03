import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const handleRegister = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(name)
    createUser(email, password)
      .then(result => {
        const createdNewUser = result.user
        console.log(createdNewUser)
      })
      .then(error => console.error(error))
  }
  return (
    <div className='w-11/12 sm:w-1/3 mx-auto my-10 '>
      <h2 className='text-2xl mb-10 text-center'>Please Register</h2>
      <form onSubmit={handleRegister} className='mx-auto'>
        <div className='form-control w-full max-w-xs'>
          <label className='label mb-3'>
            <span className='label-text text-primary'>What is your name?</span>
          </label>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label mb-3'>
            <span className='label-text text-primary'>
              Enter your image URL
            </span>
          </label>
          <input
            type='text'
            name='url'
            placeholder='enter your image URL'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label mb-3'>
            <span className='label-text text-primary'>Enter your Email</span>
          </label>
          <input
            type='email'
            name='email'
            placeholder='enter your Email'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label mb-3'>
            <span className='label-text text-primary'>Create New password</span>
          </label>
          <input
            type='password'
            name='password'
            placeholder='create your new password'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className='label mb-3'>
            <span className='label-text text-primary'>
              Confirm your password
            </span>
          </label>
          <input
            type='password'
            name='confirmed-password'
            placeholder='confirm your password'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text'>
              Accept <Link to='/terms'>Terms and Conditions</Link>
            </span>
            <input type='checkbox' checked className='checkbox' />
          </label>
        </div>
        <input type='submit' value='Submit' className='btn btn-outline my-4 ' />
        <div>
          <span>
            Already have an account? Please <Link to='/login'>Login</Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Register
