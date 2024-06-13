import React from 'react';
 import log from './video/login1.png';
 import image1 from './video/logo2.png';
// import p1 from './/video/p1.jpg';
import { Link } from 'react-router-dom';
import './login.css';
function Login(){
    return (
        <>
        <div class="Out">
            <div class="in1"><img src={`${log}`} alt=""></img>
            <img class="title3" src={`${image1}`} alt=""></img>
            <p class="title1">Time to Travel</p>
            <p class="title2">The World</p>
            </div>
            <div class="in2">
                <div class="inin">
                    <p class="head">Login to your Account</p>
                    <label for="email">E-mail</label>
                    <input type="email" placeholder='Enter you email' id='user'></input>
                    <label for="password">Password</label>
                    <input type="password" placeholder='Enter you password' id='pass'></input>
                    <Link to='/forgot' class="lin"><p class="forget">forget password?</p></Link>
                    <Link to='/'><button>Login</button></Link>
                    <Link to='/sign' class="lin"><p class="create">Create your new account?</p></Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;