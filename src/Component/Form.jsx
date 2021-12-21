import React,{useState} from 'react'
import "./Form.css";
import { useUserContext } from './Context/UserContext';

const Form = () => {
    const {login} = useUserContext()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const [formData, setFormData] = useState("")

    const usernameHandler=(e)=>{
        setUsername(e.target.value)
    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }
     
     

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        login(username)
         
    }

  
    return (
        <>
            <form onSubmit={onSubmitHandler}> 
                <div className='formInput' >
                    <label htmlFor="">username</label>
                    <input type="text" placeholder='username' value={username} onChange={usernameHandler} />
                </div>
                <div className='formInput'>
                    <label htmlFor="">password</label>
                    <input type="password" placeholder='****' value={password} onChange={passwordHandler} />
                </div>
                <div className='btn'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form
