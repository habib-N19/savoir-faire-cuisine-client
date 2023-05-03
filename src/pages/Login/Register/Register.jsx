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
      .catch(error => console.error(error))
  }
  return (
    <div className='w-11/12 sm:w-1/3 mx-auto my-10 '>
      <h2 className='text-2xl mb-10 text-center'>Please Register</h2>
      <form onSubmit={handleRegister} className='mx-auto'>
        <div className='form-control w-full max-w-xs mb-3'>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control w-full max-w-xs mb-3'>
          <input
            type='text'
            name='url'
            placeholder='Enter your image URL'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control w-full max-w-xs mb-3'>
          <input
            type='email'
            name='email'
            placeholder='Enter your Email'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control w-full max-w-xs mb-3'>
          <input
            type='password'
            name='password'
            placeholder='Create your new password'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control w-full max-w-xs mb-3'>
          <input
            type='password'
            name='confirmed-password'
            placeholder='Confirm your password'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control flex flex-row my-2'>
          <div>
            <input
              type='checkbox'
              className='checkbox cursor-pointer mr-2 bg-primary'
            />
          </div>
          <div>
            Accept <Link to='/terms'>Terms and Conditions</Link>
          </div>
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-outline my-4 '
        />
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
