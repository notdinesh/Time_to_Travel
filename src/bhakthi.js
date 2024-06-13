import React from 'react';
import image1 from './video/logo2.png';
import t1 from './/video/t1.jpg';
import s1 from './video/varanasi.jpg';
import s2 from './video/rishikesh.jpg';
import s3 from './video/badrinath.jpg';
import s4 from './video/KENDARNATH.jpg';
import s5 from './video/Rameshwaram.jpg';
import { Link } from 'react-router-dom';
import './bhakthi.css';
function Bhakthi(){
    return (
        <>
        <div class="header">
        <div><img src={`${image1}`} alt="" /></div>
        <div class="head1" ><Link to='/' class="sign"><p>Home</p></Link></div>
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
        <img src={`${t1}`} class="img" >
        </img>
        <p class="slo">PEACE AND DIVINITY</p>
        </div>
        <div class="outer">
            <div class="inner">
                <div class='imgdivison'>
                   <img src={`${s1}`}></img>
                </div>
                <div class="para">
                    <p class='name'>KASI</p>
                    <p>Kasi or Varanasi, the “City of Spiritual Light” is one of the holiest places in India, where Hindu pilgrims come to wash away a lifetime of sins in the Ganges or to cremate their loved ones.</p>
                </div>
                <div class="detail">
                    <Link to='/kasi'><button>DETAILS</button></Link>
                </div>
            </div>
            <div class="inner">
                <div class='imgdivison'>
                   <img src={`${s2}`}></img>
                </div>
                <div class="para">
                    <p class='name'>RISHIKESH</p>
                    <p>Rishikesh - a busy little town on the banks of the holy Ganges at the foot of the Himalayas, Rishikesh is the gateway to the Garhwal in the Himalayas. In the district of Dehradun, Rishikesh is situated at an altitude of 1360 ft above sea level. Rishikesh is located precisely on the part in Uttaranchal known as Tehri-Garhwal region.</p>
                </div>
                <div class="detail">
                <Link to='/rishikesh'><button>DETAILS</button></Link>
                </div>
            </div>
            <div class="inner">
                <div class='imgdivison'>
                   <img src={`${s3}`}></img>
                </div>
                <div class="para">
                    <p class='name'>BADRINATH</p>
                    <p>Badrinath cradled in the twin mountain ranges of Nar and Narayan, Badrinath is the holiest of the four main shrines.With the splendid Neelkanth mountains as the backdrop, the shrine is dedicated to Lord Vishnu, the preserver and falls in the religious itinerary of every devout Hindu. Badrinath is situated along the right bank of the river Alaknanda.</p>
                </div>
                <div class="detail">
                <Link to='/badrinath'><button>DETAILS</button></Link>
                </div>
            </div>
            <div class="inner">
                <div class='imgdivison'>
                   <img src={`${s4}`}></img>
                </div>
                <div class="para">
                    <p class='name'>KEDARNATH</p>
                    <p>Kedarnath amidst the dramatic mountainscapes of the majestic Kedarnath range, stands one of the twelve ‘Jyotirlingas’ of Kedar or Lord Shiva.Lying at an altitude of 3584 mts. on the head of river Mandakini, the shrine of Kedarnath is amongst the holiest pilgrimages for the Hindus.</p>
                </div>
                <div class="detail">
                <Link to='/kedarnath'><button>DETAILS</button></Link>
                </div>
            </div>
            <div class="inner">
                <div class='imgdivison'>
                   <img src={`${s5}`}></img>
                </div>
                <div class="para">
                    <p class='name'>RAMESHWARAM</p>
                    <p>Rameshwaram is one of the foremost religious cities in Tamil Nadu. An important pilgrimage center for both Shaivites and Vaishnavaites, it was at Rameswaram where Lord Rama (an incarnation of Lord Vishnu in the Indian epic - The Ramayana) performed thanksgiving rituals to Lord Shiva after his triumph over the demon king Ravana in the battle at Sri Lanka. Rameswaram is located on eastern side of the island in the Gulf of Mannar.</p>
                </div>
                <div class="detail">
                <Link to='/rameshwaram'><button>DETAILS</button></Link>
                </div>
            </div>
        </div>
            <hr class="hor"></hr>
        </>
    )
}
export default Bhakthi;
