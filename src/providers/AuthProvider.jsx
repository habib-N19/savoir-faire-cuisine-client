import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // login with google provider
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleAuthProvider)
  }
  // login with github
  const githubSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, githubAuthProvider)
  }
  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // signing in with email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  // logout
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      console.log('logged user inside auth state observer', loggedUser)
      setUser(loggedUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading,
    googleSignIn,
    githubSignIn
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
