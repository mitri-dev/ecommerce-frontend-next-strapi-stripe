import Head from 'next/head'
import { useContext, useState } from 'react'
import GoogleAuthContext from '../context/GoogleAuthContext'

import { GoogleLogout } from 'react-google-login'
import { GOOGLE_CLIENT_ID } from '../utils/urls.js'

export default function Profile() {

  const { user, logout } = useContext(GoogleAuthContext)

  // function onSubmit(e) {
  //   e.preventDefault()
  //   logout()
  // }

  if(!user) {
    return (
      <div>
        <p>Please login or register</p>
      </div>
    )
  }

  return (
    <div>
    <Head>        
      <meta httpEquiv="Content-Type" content="text/html"/>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Profile - Mitr.dvp</title>
      <meta name="description" content="The account page, view your orders and logout from mitri.dvp." />
    </Head>

    <h2>Profile Page</h2>

    {/* <form onSubmit={onSubmit}>
      <button type="submit">Log out</button>
    </form> */}

    <GoogleLogout
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={() => logout()}
    >
    </GoogleLogout>

  </div>
  )
}
