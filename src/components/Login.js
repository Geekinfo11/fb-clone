import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { useDispatch } from 'react-redux'
import { SET_USER } from '../constants/userConstants'

const Login = () => {
    const dispatch = useDispatch()

    const handleLogin = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({ type: SET_USER, payload: result.user })
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className='login'>
            <div className="login_logo">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png' alt='' />
            </div>
            <div className="login_text">
                <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
            </div>
            <Button type='submit' onClick={handleLogin}>LOGIN WITH GOOGLE</Button>
        </div>
    )
}

export default Login
