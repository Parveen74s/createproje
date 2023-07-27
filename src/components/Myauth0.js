import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Myauth0() {
    const {loginWithRedirect} = useAuth0();
    return (
        <div style ={{marginTop:200}}>
    <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
    )
}

export default Myauth0