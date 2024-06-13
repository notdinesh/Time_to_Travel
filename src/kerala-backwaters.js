import React from 'react';
import image1 from './video/logo2.png';
import p1 from './/video/p1.jpg';
import z1 from './/video/KERELA-BACK-WATRERS.jpg';
// import z2 from './/video/DELHI-RED-FORT.jpg';
import { Link } from 'react-router-dom';
// import './Agra-delhi.css';
function Keralabackwaters(){
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
        <p style={{textAlign: "center",color:"orange",fontWeight:"700",fontSize:"35px"}}>KERALA-BACK-WATERS</p>
        <div class="info" style={{fontSize:"14px",paddingBottom:"120px"}}>
            <div class="content-1" style={{width:"100%"}}>
               <p><img src={`${z1}`} style={{float:"left",marginRight:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img><strong>Kerala,</strong> popularly known and believed as God's Own Country, is an ideal destination for business traveler as well as holidaymaker. The state is blessed with myriad features like dense tropical forests, beautiful beaches, cliffs, rocky coasts, an intricate maze of backwaters, still bays and astounding 44 radiant rivers. Kerala backwaters take you to an exotic world showcasing mesmerizing natural attractions. Spending days in Kerala is rejuvenating to say the least, especially at the backwater destinations, connected through meandering inland lakes.</p>               
               <p>You can experience unforgettable Backwater tours in Kerala.</p>
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
export default Keralabackwaters; 