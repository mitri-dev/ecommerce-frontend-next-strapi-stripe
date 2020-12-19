import Head from 'next/head'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

import { GoogleLogin } from 'react-google-login'
import { GOOGLE_CLIENT_ID } from '../utils/urls.js'


export default function Login() {

  const [email, setEmail] = useState(null)

  const { login } = useContext(AuthContext)

  function onSubmit(e) {
    e.preventDefault()
    login(email)
  }

  const responseGoogle = (res) => {
    if(res.error) return
    const profile = res.getBasicProfile();
    login(profile.getEmail())

    profile.getId()
    profile.getName()
    profile.getImageUrl()
    profile.getEmail()
  }

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

      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Login"
        // render={renderProps => (
        //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
        // )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
        cookiePolicy={'single_host_origin'}
      />


  </div>
  )
}
