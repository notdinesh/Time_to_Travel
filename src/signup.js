import React from 'react';
 import log from './video/login1.png';
 import image1 from './video/logo2.png';
// import p1 from './/video/p1.jpg';
import { Link } from 'react-router-dom';
import './login.css';
function Sign(){
    return (
        <>
        <div class="Out">
            <div class="in1"><img src={`${log}`} alt=""></img>
            <img class="title3" src={`${image1}`} alt=""></img>
                <p class="title1">Time to Travel</p>
            <p class="title2">The World</p></div>
            <div class="in2">
                <div class="inin">
                    <p class="head">Login to your Account</p>
                    <input type="email" placeholder='Enter you email'></input>
                    <input type="password" placeholder='Password(6-20 characters)'></input>
                    <input type="password" placeholder='Confirm password'></input>
                    {/* <p class="forget">forget password?</p> */}
                    <Link to='/'><button>Create account</button></Link>
                    <p class="create">Already have an account? <Link to='/login' class="lin"><span>Sign in</span></Link></p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Sign;