import React from 'react';
import { Link } from 'react-router-dom';
import video from './video/eroutes.mp4';
import image1 from './video/logo2.png';
import image2 from './video/img1.jpg';
import image3 from './video/img2.jpg';
import image4 from './video/img3.jpg';
import image5 from './video/img4.jpg';
import './home.css'
function Home(){
    return (
        <>
        <div class="header">
        <div><img src={`${image1}`} alt="" /></div>
        <div class="head1"><Link to='/' class="sign"><p>Home</p></Link></div>
        <div><Link to='/gallery' class="sign"><p>Gallery</p></Link></div>
        <div><Link to='/servicein' class="sign"><p>Services</p></Link></div>
        
            <div class="main-menu">
                <div class="pack"><p>Packages 🢓</p></div>
                <div class="dropdown">
                    <Link to='/tour' class="dec">Domestic&International</Link>
                    <Link to='/tour' class="dec">Group Tours</Link>
                    <Link to='/Bhakthi' class="dec">Bhakthimarg Tours</Link>
                    
                </div>
            </div>
        
        <div><Link to='/tour' class="sign"><p>Group Tours</p></Link></div>
        <div><Link to='/contact' class="sign"><p>Contact Us</p></Link></div>
        <div><Link to='/login' class="sign"><p>Log in</p></Link></div>
        <div class="sign"><Link to='/sign' class="sign">Sign up</Link></div>
        </div>
        {/* <Link to='/sign' class="">Naveen kumar</Link> */}
        <div class="videodiv">
        <video src={video} autoplay="true" loop="loop" muted  class="video" >
        </video>
        <div class="top1">
            <div class="firsttop">
               <h1><span>T</span>IME <span>T</span>O <span>T</span>RAVEL</h1>
            </div>
            <div class="sectop">
               <Link to='/service'><button class="button1">SERVICE ENQUIRY</button></Link>
               <Link to='/tour'><button class="button2">GROUP TOURS</button></Link>
               <Link to='/gallery'><button class="button3">GALLERY</button></Link>
            </div>
        </div>

        </div>
        <marquee directioin="right" class="new">Customer is our God who pays everything for our life. We promise to provide them the best quality of service in being strong with communication and regular follow ups</marquee>
         <p class="para1">Time to Travel</p>
         <p class="para2">We will take any criteria to discuss your requirements in details.</p>
         <p class="para2">If you are not sure of what you might like to do then give us a call and we'll help you decide.</p>
         <div class="maindiv">
            <div class="subdiv">
            <Link to='/tour'><img src={`${image2}`} alt=""></img></Link>
                <p><strong>Domestic</strong> tours</p>
            </div>
            <div class="subdiv">
                <Link to='/tour'><img src={`${image3}`} alt=""></img></Link>
                <p><strong>International</strong> tours</p>
            </div>
            <div class="subdiv">
            <Link to='/tour'><img src={`${image4}`} alt=""></img></Link>
                <p><strong>Group</strong> tours</p>
            </div>
            <div class="subdiv">
            <Link to='/Bhakthi'><img src={`${image5}`} alt=""></img></Link>
                <p><strong>Bhakthimarg</strong> tours</p>
            </div>
         </div>   
        </>
    )
}
export default Home;