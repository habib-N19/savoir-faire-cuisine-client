import React, { createContext } from 'react'
import app from '../firebase/firebase.config'
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
  // login with google provider
  const googleSignIn = () => {
    return signInWithPopup(auth, googleAuthProvider)
  }
  // login with github
  const githubSignIn = () => {
    return signInWithPopup(auth, githubAuthProvider)
  }
  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // signing in with email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const authInfo = {
    createUser,
    signIn,
    googleSignIn,
    githubSignIn
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
