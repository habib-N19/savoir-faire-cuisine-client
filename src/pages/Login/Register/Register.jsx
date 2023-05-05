import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const { createUser, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  // making accepting terms
  const [isAccepted, setIsAccepted] = useState(false)
  // displaying errors in register
  const [error, setError] = useState(null)
  const handleRegister = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const confirmed_password = form.confirmed_password.value
    if (password.length < 6 || password !== confirmed_password) {
      setError('Password do not match or Less that 6 character')
      toast(error)
      return
    } else {
      createUser(email, password)
        .then(result => {
          const createdNewUser = result.user
          console.log(createdNewUser)
          toast.success(`Registration Successful! Congratulation ${name}`)
          logOut()
          navigate('/login')
        })
        .catch(error => {
          setError(error)
          toast.error(error.message)
        })
    }
  }
  const handleCheckBox = event => {
    setIsAccepted(event.target.checked)
  }
  return (
    <div className='w-11/12 sm:w-1/3  mx-auto my-10 '>
      <h2 className='text-2xl mb-10 text-center'>Please Register</h2>
      <form
        onSubmit={handleRegister}
        className='mx-auto flex flex-col justify-center items-center'
      >
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
            placeholder='Create your password'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control w-full max-w-xs mb-3'>
          <input
            type='password'
            name='confirmed_password'
            placeholder='Confirm your password'
            required
            className='input input-bordered w-full max-w-xs placeholder-secondary bg-primary text-secondary'
          />
        </div>
        <div className='form-control flex flex-row my-2'>
          <div>
            <input
              onClick={handleCheckBox}
              type='checkbox'
              className='checkbox cursor-pointer mr-2 bg-primary'
            />
          </div>
          <div>
            Accept <Link to='/terms'>Terms and Conditions</Link>
          </div>
        </div>
        <div className='form-control flex flex-row my-2 w-11/12 mx-auto'>
          <input
            type='submit'
            disabled={!isAccepted}
            value='Register'
            className='btn btn-outline my-2 w-10/12 mx-auto'
          />
        </div>
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
