import React from 'react';
import image1 from './video/logo2.png';
import p1 from './/video/p1.jpg';
import z1 from './/video/MALAYSIA.jpg';
// import z2 from './/video/DELHI-RED-FORT.jpg';
import { Link } from 'react-router-dom';
// import './Agra-delhi.css';
function Malaysia(){
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
        <p style={{textAlign: "center",color:"orange",fontWeight:"700",fontSize:"35px"}}>MALAYSIA</p>
        <div class="info" style={{fontSize:"14px",paddingBottom:"60px",marginBottom:"40px",height:"300px"}}>
            <div class="content-1" style={{width:"100%"}}>
               <p><img src={`${z1}`} style={{float:"left",marginRight:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img><strong>Malaysia</strong> Malaysia has a wide range of tourist attractions. The sheer diversity of tourism destinations is astounding.</p>               
               <p>These include the high-tech city of Kuala Lumpur, tropical island of Langkawi, colonial hill stations of Genting and Cameron Highlands, numerous pristine beaches, Domestic Parks, and the world's oldest tropical rainforests.</p>
               <p>Malaysia has the potential of catering to tourist of every hue and it truly lives up to its tag line of Malaysia Truly Asia.</p>
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
export default Malaysia; 