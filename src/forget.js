import React from 'react';
 import log from './video/login1.png';
 import image1 from './video/logo2.png';
// import p1 from './/video/p1.jpg';
import { Link } from 'react-router-dom';
import './forget.css';
function Forget(){
    return (
        <>
        <div class="Out">
            <div class="in1"><img src={`${log}`} alt=""></img>
            <img class="title3" src={`${image1}`} alt=""></img>
            <p class="title1">Time to Travel</p>
            <p class="title2">The World</p>
            </div>
            <div class="in2">
                <div class="inin1">
                    <p class="head">Forgot your password?</p>
                    <input type="email" placeholder='Enter you email'></input>
                    {/* <input type="password" placeholder='Enter you password'></input> */}
                    {/* <p class="forget">forget password?</p> */}
                    <Link to='/'><button>Next</button></Link>
                    <Link to='/sign' class="lin"><p class="create">Back to sign in</p></Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Forget;