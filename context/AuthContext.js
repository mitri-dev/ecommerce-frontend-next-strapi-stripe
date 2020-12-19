import { createContext, useState } from 'react'
import { useRouter } from 'next/router'

// const { signIn, loaded } = useGoogleLogin()

const AuthContext = createContext()

export const AuthProvider = (props) => {

  const [user, setUser] = useState(null)
  const router = useRouter()

  /**
   * login user with email
   * @param {srting} email 
   */
  const login = async (email) => {
    setUser({email})
    router.back()
  }

  /**
   * Logout user and set to null
   */
  const logout = async () => {
    setUser(null)
    router.push('/')
  }

  const checkUserLoggedIn = async () => {
    try {
    } catch (e) {
      
    }
  }

    return (
    <AuthContext.Provider value={{user,login,logout}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext