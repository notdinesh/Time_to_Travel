import React from 'react';
import image1 from './video/logo2.png';
import p1 from './/video/p1.jpg';
import z1 from './/video/SINGAPORE.jpg';
// import z2 from './/video/DELHI-RED-FORT.jpg';
import { Link } from 'react-router-dom';
// import './Agra-delhi.css';
function Singapore(){
    return (
        <>
        <div class="header">
        <div><img src={`${image1}`} alt="" /></div>
        <div class="head1"><Link to='/' class="sign"><p>Home</p></Link></div>
        <div><Link to='/gallery' class="sign"><p>Gallery</p></Link></div>
        <div><Link to='/servicein' class="sign"><p>Services</p></Link></div>
        <div class="pack"><p>Packages 🢓</p></div>
        <div><Link to='/tour' class="sign"><p>Group Tours</p></Link></div>
        <div><Link to='/contact' class="sign"><p>Contact Us</p></Link></div>
        <div><Link to='/login' class="sign"><p>Log in</p></Link></div>
        <div class="sign"><Link to='/sign' class="sign">Sign up</Link></div>
        </div>
        <div class="topimg">
        <img src={`${p1}`} class="img" >
        </img>
        <p class="slo1">PACKAGES</p>
        </div>
        <p style={{textAlign: "center",color:"orange",fontWeight:"700",fontSize:"35px"}}>SINGAPORE</p>
        <div class="info" style={{fontSize:"14px",paddingBottom:"60px",marginBottom:"40px"}}>
            <div class="content-1" style={{width:"100%"}}>
               <p><img src={`${z1}`} style={{float:"left",marginRight:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img><strong>The Republic of Singapore</strong> is one of the main tourist attractions in Asia. Singapore is an island country and is considered as the smallest country in south East Asia. Enriched with various tourist attractions Singapore invited thousands of tourists from different corners of the world to come and explore her beauty.</p>               
               <p>Unique culture with wonderful scenic beauty makes the land stand out from the other popular tourist destinations in Asia. The parks, the gardens, the serene beaches and the palm fringes are the attractive features of this island. The mixture of culture can be witnessed in every sphere commencing from the delicacies to clothing to religion to heritage.</p>
               <p>Singapore's Popular Destinations attract thousands of tourists every year. Various islands, small countryside towns with innocent nature give the tourists the chance to enjoy the natural beauty and its splendid elements. The most attractive part of Singapore is the blend of cultures where east meets west to form a new civilization. Singapore bears diversities in respect of its topography, ethnicity and traditions.</p> 
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div class="button">
                <Link to='/contact'><button>Get a Callback</button></Link>
            </div>
        </div>
        
        </>
    )
}
export default Singapore; 