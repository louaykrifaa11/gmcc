import React from 'react'
import { useRef } from 'react'
import { UserLogin } from '../redux/slices/userSlice'
import { useDispatch } from 'react'

const Login = () => {
    const email=useRef()
    const password=useRef()
    const dispatch=useDispatch()
return (

    <div>

        <input type='email' placeholder='type your email' ref={email}></input>
        <input type='password' placeholder='type your password' ref={password}></input>
        <button onClick={()=>{dispatch(UserLogin({
            email:email.current.value,   
            password:password.current.value   
        }))}}>login</button>
    </div>
)
}

export default Login