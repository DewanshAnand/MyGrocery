import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './AuthPage.css'

const Login = () => {
    return (
        <div className='authpage'>
            <Navbar />

            <div className='authcont'>
                <img src='https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600' alt='login' />

                <form className='authform'>
                    <h1>Login</h1>

                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>

                    <div className='formgroup'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>

                    <Link to='/forgotpassword' className='styleone'>
                        <p>Forgot password</p>
                    </Link>

                    <Link to='/' className='styleone'>
                        <button className='btn'>Login</button>
                    </Link>
                    <h2 className='or'>OR</h2>

                    <Link to='/signup' className='styleone'>
                        <button className='btn'>Signup</button>
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Login