import React from 'react';
import image1 from './video/logo2.png';
import p1 from './/video/p1.jpg';
import z1 from './/video/rishikesh.jpg';
// import z2 from './/video/DELHI-RED-FORT.jpg';
import { Link } from 'react-router-dom';
// import './Agra-delhi.css';
function Rishikesh(){
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
        <p style={{textAlign: "center",color:"orange",fontWeight:"700",fontSize:"35px"}}>RISHIKESH</p>
        <div class="info" style={{fontSize:"14px",paddingBottom:"60px",marginBottom:"40px"}}>
            <div class="content-1" style={{width:"100%"}}>
               <p><img src={`${z1}`} style={{float:"left",marginRight:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img><strong>Rishikesh</strong> is a holiday paradise on India's west coast. Come to Goa for an Holiday and you won't be disappointed. Goa has something to offer every tourist.</p>               
               <p>If its sun, sand and sea that you're looking for, Goa's got it all in abundance. Miles of golden sandy expanses stretch along the west coast of India, beside the Arabian Sea. The rolling waves wash the beaches of Goa, on which sunbathers, holiday travelers and the local residents of Goa relax and have the time of their lives.</p>
                <p>Goa, India, is famous the world over for the unique charm of its beaches. The famous beaches Calangute, Miramar, Dona Paula, Agonda, Aguada, Benaulim and Colva to name a few, were sought after by hippies and flower children in the 1970's. Today Goa's beaches attract International tourists who seek a place to relax and unwind in the sunny weather of Goa, India.</p>
               <p>If its history and culture that interests you, Goa has many historic churches and colonial buildings. Panaji the capital of Goa has lots to offer a tourist with an interest in history and architecture. The colonial monuments built by the Portuguese in Goa, make a fascinating tour. With fabulous beaches, cultural attractions and warm and friendly people, there can no better place than Goa for your Holiday.</p>
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
export default Rishikesh; 