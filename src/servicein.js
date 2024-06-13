import React from 'react';
import image1 from './video/logo2.png';
import S1 from './/video/s1.jpg';
import s2 from './video/s2.jpg'
import { Link } from 'react-router-dom';
import './servicein.css';
function Servicein(){
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
        <img src={`${S1}`} class="img" >
        </img>
        </div>
        <h1 class="h2">JOY & JOURNEY</h1>
        <h3 class="h3">Services that best wuit your requirements..</h3>
        <hr class="hori"></hr>
        <div class="out">
            <div><img src={`${s2}`}></img></div>
            <div class="details">
                <h3>Cherish a life time experience with us!!!</h3>
                <h5>Group Travel with Us</h5>
                <h6>For weekends away, seaside breaks, mountain trips and educational tours - let e...Routes take the strain of organizing your next Group holiday.</h6>
                <h6>Whether it is taking a group allocation from our extensive Tour brochure, or for parties of 30 or more, a 'tailor-made' package designed to meet the needs of you and all your group members, trust eRoutes to take care of everything!</h6>
                <hr></hr>
                <h5>'Tailor Made' Group Holidays</h5>
                <h6>For groups of 30 or more we can specially design a weekend break or holiday designed to suite all of your groups needs. With your choice of resort, hotel, meal arrangements and even excursions, you will be certain of a superb Group Holiday, one which all of your members will enjoy. Simply contact us to discuss and leave the rest to eRoutes.</h6>
                <hr></hr>
                <h5>eRoutes 24 hours, 7 days a week</h5>
                <h6>While you're away, you can get hold of us round the clock - by phone, email and text. We can fix problems and answer your questions on the spot. And we can book excursions, activities and car hire for you.</h6>
                <h6>If you need to speak to us face to face, we'll come and see you at a time that suits. So, we can be there all the time, only when you need us or not at all. It's your call.</h6>

            </div>
        </div>
        <hr class="ho"></hr>
        </>
    )
}
export default Servicein;