import React from 'react';
import image1 from './video/logo2.png';
import gal1 from './/video/gal1.jpg';
import g1 from './video/int1.jpg';
import g2 from './video/int2.jpg';
import g3 from './video/int3.jpg';
import g4 from './video/int4.jpg';
import g5 from './video/int5.jpg';
import g6 from './video/int6.jpg';
import g7 from './video/int7.jpg';
import g8 from './video/int8.jpg';
import g9 from './video/int9.jpg';
import g10 from './video/int10.jpg';
import g11 from './video/int11.jpg';
import g12 from './video/int12.jpg';
import g13 from './video/int14.jpg';
import g14 from './video/int15.jpg';
import g15 from './video/int13.jpg';
import g16 from './video/int16.jpg';
import g17 from './video/int17.jpg';
import g18 from './video/int18.jpg';
import g19 from './video/int19.jpg';
import g20 from './video/int20.jpg';
import g21 from './video/int21.jpg';
import { Link } from 'react-router-dom';
import './gallery.css';
function Gallery(){
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
        <img src={`${gal1}`} class="img" >
        </img>
        <p class="slog">COLLECTIONS & MEMORIES</p>
        </div>
        <h3 class="happy"><span>HAPPINESS</span> GUARANTEED</h3>
        <hr class="happyhr"></hr>
        <div class="galouter">
            <div class="galinner1">
                <img src={`${g1}`} alt=""></img>
            </div>
            <div class="galinner2">
                <img src={`${g2}`} alt=""></img>
            </div>
            <div class="galinner3">
                <img src={`${g3}`} alt=""></img>
            </div>
            <div class="galinner4">
                <img src={`${g4}`} alt=""></img>
            </div>
            <div class="galinner5">
                <img src={`${g5}`} alt=""></img>
            </div>
            <div class="galinner6">
                <img src={`${g6}`} alt=""></img>
            </div>
            <div class="galinner7">
                <img src={`${g7}`} alt=""></img>
            </div>
            <div class="galinner8">
                <img src={`${g8}`} alt=""></img>
            </div>
            <div class="galinner9">
                <img src={`${g9}`} alt=""></img>
            </div>
            <div class="galinner10">
                <img src={`${g10}`} alt=""></img>
            </div>
            <div class="galinner11">
                <img src={`${g11}`} alt=""></img>
            </div>
            <div class="galinner12">
                <img src={`${g12}`} alt=""></img>
            </div>
            <div class="galinner13">
                <img src={`${g13}`} alt=""></img>
            </div>
            <div class="galinner14">
                <img src={`${g14}`} alt=""></img>
            </div>
            <div class="galinner15">
                <img src={`${g15}`} alt=""></img>
            </div>
            <div class="galinner16">
                <img src={`${g16}`} alt=""></img>
            </div>
            <div class="galinner17">
                <img src={`${g17}`} alt=""></img>
            </div>
            <div class="galinner18">
                <img src={`${g18}`} alt=""></img>
            </div>
            <div class="galinner19">
                <img src={`${g19}`} alt=""></img>
            </div>
            <div class="galinner20">
                <img src={`${g20}`} alt=""></img>
            </div>
            <div class="galinner21">
                <img src={`${g21}`} alt=""></img>
            </div>
        </div>
        </>
    )
}
export default Gallery;