import React from 'react';
import image1 from './video/logo2.png';
import p1 from './/video/p1.jpg';
import { Link } from 'react-router-dom';
import './tour.css';
function Tour(){
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
        <img src={`${p1}`} class="img" >
        </img>
        <p class="slo">TRIPS FOR A LIFETIME</p>
        </div>
        <hr class="hori-line"></hr>
        <div class="mainbox">
            <div class="col1">
           <div class="subbox">
               <h4>Northern India Holidays</h4>
               <Link to='/agradelhi' class="tourdec"><h5><strong>Agra-Delhi</strong></h5></Link>
               <p>Uttar Pradesh & Delhi | Northern India.</p>
               <hr></hr>
               <Link to='/agradelhijaipur' class="tourdec"><h5><strong>Agra-Jaipur-Delhi</strong></h5></Link>
               <p>Uttar Pradesh, Rajastan & Delhi| North and North Western India.</p>
               <hr></hr>
               <Link to='/agradelhikashmir' class="tourdec"><h5><strong>Agra-Delhi-Kashmir</strong></h5></Link>
               <p>Uttar Pradesh, Delhi & Kashmir | Northern India.</p>
               <hr></hr>
           </div>
           <div class="subbox">
               <h4>North Western Holidays</h4>
               <Link to='/ahamedabad' class="tourdec"><h5><strong>Ahamedabad-Mount Abu-Daipur</strong></h5></Link>
               <p>gujarat & Rajastan | North Western India.</p>
               <hr></hr>
           </div>
           <div class="subbox">
               <h4>western India Holidays</h4>
               <Link to='/goa' class="tourdec"><h5><strong>Goa</strong></h5></Link>
               <p>Goa | Western India.</p>
               <hr></hr>
               <Link to='/mumbai' class="tourdec"><h5><strong>Mumbai</strong></h5></Link>
               <p>Maharashtra | Western India.</p>
               <hr></hr>
               <Link to='/bangaloregoa' class="tourdec"><h5><strong>Bangalore - Goa</strong></h5></Link>
               <p>Karnataka & Goa | South & Western India.</p>
               <hr></hr>
               <Link to='/hyderabadajanta' class="tourdec"><h5><strong>Hyderabad - Ajanta - ellora - Mumbai</strong></h5></Link>
               <p>Karnataka & Goa | South & Western India.</p>
           </div>
           <div class="subbox">
               <h4>North Eastern India Holidays</h4>
               <Link to='/kolkata' class="tourdec"><h5><strong>Kolkata- Darjeeling</strong></h5></Link>
               <p>West Bengal | North East India.</p>
               <hr></hr>
           </div>
           </div>
           <div class="col2">
           <div class="subbox">
               <h4>Kerala Holidays | Southern India</h4>
               <Link to='/cochinmunnar' class="tourdec"><h5><strong>Cochin-Munnar</strong></h5></Link>
               <p>Kerala | Southern India.</p>
               <hr></hr>
               <Link to='/cochinmunnarthekkady' class="tourdec"><h5><strong>Cochin-Munnar-Thekkady</strong></h5></Link>
               <p>Kerala | Southern India.</p>
               <hr></hr>
               <Link to='/keralabackwaters' class="tourdec"><h5><strong>Kerala Backwaters</strong></h5></Link>
               <p>Kerala | Southern India.</p>
               <hr></hr>
           </div>
           <div class="subbox">
               <h4>Karnataka Holidays | Southern India</h4>
               <Link to='/bangaloremysore' class="tourdec"><h5><strong>Bangalore - Mysore</strong></h5></Link>
               <p>Karnataka | Southern India.</p>
               <hr></hr>
               <Link to='/mangalore' class="tourdec"><h5><strong>Mangalore - Coorg - Mysore</strong></h5></Link>
               <p>Karnataka | Southern India.</p>
               <hr></hr>
               
           </div>
           <div class="subbox">
               <h4>Andra Pradesh Holidays | South India</h4>
               <Link to='/vishakhapatnam' class="tourdec"><h5><strong>Visakhapatnam- Hyderabad</strong></h5></Link>
               <p>Andra Pradesh | Southern India.</p>
               <hr></hr>
           </div>
           <div class="subbox">
               <h4>Tamil Nadu & Kerala | South India</h4>
               <Link to='/trivandrum' class="tourdec"><h5><strong>Kanyakumari- Trivandrum</strong></h5></Link>
               <p>Tamil Nadu & Kerala | Southern India.</p>
               <hr></hr>
               <Link to='/kodaikanal' class="tourdec"><h5><strong>Kodaikanal - Thekkady</strong></h5></Link>
               <p>Tamil Nadu & Kerala | Southern India.</p>
               <hr></hr>
               
           </div>
           <div class="subbox">
               <h4>Tamil Nadu Holidays | South India</h4>
               <Link to='/ooty' class="tourdec"><h5><strong>Ooty - Kodaikanal</strong></h5></Link>
               <p>Tamilnadu | Southern India.</p>
               <hr></hr>
           </div>
           </div>
           <div class="col3">
           <div class="subbox">
               <h4>International Holidays - South East Asia</h4>
               <Link to='/singapore' class="tourdec"><h5><strong>Singapore</strong></h5></Link>
               <p>south East Asia.</p>
               <hr></hr>
               <Link to='/malaysia' class="tourdec"><h5><strong>Malaysia</strong></h5></Link>
               <p>South East Asia.</p>
               <hr></hr>
               <Link to='/hongkong' class="tourdec"><h5><strong>Hong Kong-Maccau-Thailand</strong></h5></Link>
               <p>South East Asia.</p>
               <hr></hr>
           </div>
           <div class="subbox">
               <h4>Indian Ocean Island - Holidays</h4>
               <Link to='/srilanka' class="tourdec"><h5><strong>Sri Lanka</strong></h5></Link>
               <p>Indian Ocean.</p>
               <hr></hr>
               <Link to='/maldives' class="tourdec"><h5><strong>Maldives</strong></h5></Link>
               <p>South Asia.</p>
               <hr></hr>
           </div>
           <div class="subbox">
               <h4>Middle East Holidays</h4>
               <Link to='/dubai' class="tourdec"><h5><strong>Dubai</strong></h5></Link>
               <p>UAE | Middle East.</p>
               <hr></hr>
           </div>
           <div class="subbox">
               <h4>India & Nepal Holidays</h4>
               <Link to='/alahabad' class="tourdec"><h5><strong>Alahabad - Vaaranasi - Kathmandu</strong></h5></Link>
               <p>Indian & Nepal.</p>
               <hr></hr>
           </div>
           
           </div>
        </div>
        </>
    )
}
export default Tour;