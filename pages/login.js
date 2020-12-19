import Head from 'next/head'
import { useContext, useState } from 'react'
import LoginButton from '../components/LoginButton'

import GoogleAuthContext from '../context/GoogleAuthContext'
import { GOOGLE_CLIENT_ID } from '../utils/urls.js'


export default function Login() {

  // const [email, setEmail] = useState(null)
  //
  // const { login } = useContext(GoogleAuthContext)

  // function onSubmit(e) {
  //   e.preventDefault()
  //   login(email)
  // }


  return (
    <div>
    <Head>        
      <meta httpEquiv="Content-Type" content="text/html"/>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Login - Mitr.dvp</title>
      <meta name="description" content="Login into mitri.dvp for free." />
    </Head>

    <h2>Log in</h2>

    {/* <form onSubmit={onSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => {setEmail(e.target.value)}}
        placeholder="email..."
      />

      <button type="submit">Log in</button>
    </form> */}

      <LoginButton/>

  </div>
  )
}
