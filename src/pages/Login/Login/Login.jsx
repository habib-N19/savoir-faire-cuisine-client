import React, { useContext } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'
import { FcGoogle } from 'react-icons/fc'
import { FaGithubSquare } from 'react-icons/fa'

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
  const location = useLocation()
  const from = location.state?.from.pathname || '/'
  const handleLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user
        Navigate(from, { replace: true })
      })
      .catch(error => console.error(error))
  }
  //   google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
  }
  //   github sign in
  const handleGithubSignIn = () => {
    githubSignIn()
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
        <input
          type='submit'
          value='Login'
          className='btn btn-outline w-full max-w-xs my-4 '
        />
        <div>
          <span>
            Don't have an account? Please
            <span className='ml-2 box-border font-semibold hover:text-primary-focus'>
              <Link to='/register '>Register</Link>
            </span>
          </span>
          <div className='divider w-full max-w-xs border-primary '>OR</div>

          <div
            onClick={handleGoogleSignIn}
            className='form-control input w-full flex flex-row items-center max-w-xs my-4 border border-primary rounded hover:bg-primary hover:text-secondary hover:opacity-80 hover:cursor-pointer'
          >
            <FcGoogle className='h-full text-3xl mx-2' />

            <span className='font-semibold text-xl'>Continue with Google</span>
          </div>
          <div
            onClick={handleGithubSignIn}
            className='form-control input w-full flex flex-row items-center max-w-xs my-4 border border-primary rounded hover:bg-primary hover:text-secondary hover:opacity-80 hover:cursor-pointer'
          >
            <FaGithubSquare className='h-full text-3xl mx-2' />

            <span className='font-semibold text-xl'>Continue with Github</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
