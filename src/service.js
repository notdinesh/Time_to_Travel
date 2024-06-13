import React from 'react';
import image1 from './video/logo2.png';
import './service.css'
import c1 from './video/c1.jpg'
import { Link } from 'react-router-dom';
function Service(){
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
        <div class="topimg">
        <img src={`${c1}`} alt=""class="img" >
        </img>
        </div>
        <div class="whole">
            <div class="column1"> 
        <div class="form">
            <p class="tit">Fill the Service Enquiry Form</p>
            <div class="small">
            <div>
                <p>First Name *</p>
                <input class="small-box" type="text" placeholder='Enter Name'></input>
            </div>
            <div>
                <p>Last Name *</p>
                <input class="small-box" type="text" placeholder='Enter Last Name'></input>
            </div>
            <div>
                <p>Email *</p>
                <input class="small-box" type="text" placeholder='Enter Email'></input>
            </div>
            <div>
                <p>Phone *</p>
                <input class="small-box" type="text" placeholder='Enter Phone number'></input>
            </div>
            </div>
            <div>
                <p>Service Required *</p>
                <select class="bigbox1">
                    <option>-Select Service-</option>
                    <option> Domestic Tours</option>
                    <option> International Tours</option>
                </select>
            </div>
            <div>
                <p>Other</p>
                <input class="bigbox2" type="text" placeholder='Any other special requirements needed.'></input>
            </div>
            <div>
                <button class="submitbutton">SUBMIT</button>
            </div>
        </div>
        </div>
        <div class="column2">
        <div class="contact">
              <p class="top">TALK</p>
              <hr></hr>
              <h4>Tours</h4>
              <p>Mr.Sreenithi:+91-0987654321</p>
              <hr></hr>
              <h4>Suggestions/Complaints</h4>
              <p>Mr.Vishnu:+91-5432154321</p>
              <hr></hr>
              <h4>Walk In</h4>
              <p>389,Bharathiar Road, New Siddhapudur,</p>
              <p>Near Women's Polytechnic.</p>
              <p>Coimbatore - 641044. Tmailnadu.India.</p>
              <hr></hr>
              <h4>Call</h4>
              <p>(+91) 422 4210827</p>
              <p>(+91) 422 2524243</p>
              <hr></hr>
              <h4>Whatsapp</h4>
              <p>+91-7868282622</p>
              <p>+91-7857362622</p>
              <hr></hr>
              <h4>Write</h4>
              <p>enquiry@timetotavel.com</p>
              <hr></hr>
              <h4>Explore</h4>
              <p>www.timetotravel.com</p>
              <hr></hr>
              <h4>Follow</h4>
              <p>www.facebook.com/timetotravel</p>
        </div>
        </div>
        </div>
        </>
    )
}
export default Service;