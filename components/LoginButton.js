import { useContext } from 'react'

import GoogleAuthContext from '../context/GoogleAuthContext';
    const useGoogleAuth = () => {useContext(GoogleAuthContext)}

const LoginButton = () => {

    const {signIn} = useGoogleAuth();

    return (
        <button onClick={signIn}>Login</button>
      );
};

export default LoginButton;