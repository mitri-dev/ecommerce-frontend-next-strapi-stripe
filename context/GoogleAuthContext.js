import { createContext, useState } from 'react'
import { useRouter } from 'next/router'

import { GOOGLE_CLIENT_ID } from '../utils/urls.js'
import { useGoogleLogin } from 'react-use-googlelogin'

const GoogleAuthContext = createContext()

export const GoogleAuthProvider = (props) => {

  const [user, setUser] = useState(null)
  const router = useRouter()

    /**
   * login user with email
   * @param {srting} email 
   */
  const login = async (email) => {
    setUser({email})
    router.push('/')
  }

  /**
   * Logout user and set to null
   */
  const logout = async () => {
    setUser(null)
    router.push('/')
  }

  const googleAuth = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID, // Your clientID from Google.
  })

  return (
    <GoogleAuthContext.Provider value={{googleAuth, login, logout, user}}>
      {props.children}
    </GoogleAuthContext.Provider>
  )
}

export default GoogleAuthContext