import React from 'react'
import "./Header.css";
import { useUserContext } from './Context/UserContext';

const Header = () => {
    const {user,logout} = useUserContext();
    const logoutHandler=()=>{
        logout()
    }
    console.log(user)
    return (
        <>
        <div className='header'>
            <h2>Context Api</h2>
            <h4>Welcome, {user.name}</h4>
            <button onClick={logoutHandler}>Logout</button>
        </div>
        </>
    )
}

export default Header
