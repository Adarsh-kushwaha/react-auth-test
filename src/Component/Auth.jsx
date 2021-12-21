import React from 'react'
import Form from './Form'
import Home from './Home'
import { useUserContext } from './Context/UserContext'

const Auth = () => {
    const {user}  = useUserContext()
    
    return (
        <>
            {!user.isLogin ? <Form /> : <Home />}
        </>
    )
}

export default Auth
