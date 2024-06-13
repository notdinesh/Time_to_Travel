import React from 'react';
import image1 from './video/logo2.png';
import p1 from './/video/p1.jpg';
import z1 from './/video/mangalore.jpg';
import z2 from './/video/mysore palace.jpg';
import z3 from './/video/COORG.jpg';
import { Link } from 'react-router-dom';
// import './Agra-delhi.css';
function Mangalore(){
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
        <p style={{textAlign: "center",color:"orange",fontWeight:"700",fontSize:"35px"}}>MANGALORE - MYSORE-PALACE - COORG</p>
        <div class="info" style={{fontSize:"14px"}}>
            <div class="content-1" style={{width:"100%"}}>
               <p><img src={`${z1}`} style={{float:"left",marginRight:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img><strong>Mangalore</strong> Cochin aka Kochi is the Commercial and industrial capital of Kerala. Famous as Queen of Arabian Sea , Kochi is situated on the coast of the Arabian Sea in central Kerala, a city with mélange of several exotic cultures like the Portuguese, Jewish, English, French, Dutch and Chinese.</p>
               <p>The city is host to the best harbors in the country, and has been a much visited port by British, Arab, Chinese and Dutch traders in the earlier times. A commercial hub, the city houses many buildings and modern day structures.</p>               
               <p>Modern Kochi comprises of the old port city called Old Cochin including Mattancherry, Ernakulam mainland, Fort Kochi, Edapally, Kalamassery, Thrikkakara, Kakkanad and Tripunithura.</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
               <p><img src={`${z2}`} style={{float:"right",marginLeft:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img><atrong>Mysore</atrong> - the confluence of the three mountain river systems - Mudrapuzha, Nallathani, Kundala. Situated at 1600m above the sea level this hill station, leaves you with a cold summer sweetness. Completely dotted with lakes, reservoirs, mountains streams, scabrous rocks, wooded valleys, wavy grass hills, this hill station offers a great variety choices at short intervals.</p>
               <p>Along the quite drives, through the unending sea of tea plantations, signs of human life itself is a rare sight apart from similarly attired plantation workers. The unending dominance of the tea plantations and the mountain flower Neelakkurinji that bloom once in 12 years are both Thekkady - a group of elephentssynonymous landmarks.</p>
               <p>Playing mists, soul searching winds, hurling waterfalls, cold monsoons, picturesque towns, fragrant cardamom bushes, sprawling tea plantations, shaven silver oaks, indomitable elephant herd, long winding lanes, the bluish tint of the Neelakkurinji mountains, floating tunes of early morning radio, strangely uniform herds of plantation workers.</p>   
                <p>With the mist covering in the valleys around, the plateau of a resorts sticking out, it is a heavenly feeling of being on the legendary flaying machine - Pushpak, floating over the clouds. Munnar, Kerala- breathtakingly beautiful - a haven of peace and tranquility - the idyllic tourist destination in God's own country.</p>
            </div>
            <br></br>
            <div>
               <p><img src={`${z3}`} style={{float:"left",marginRight:"10px",height:"250px",width:"500px",boxSizing:"border-box"}}></img><strong>COORG</strong> Thekaddy, also known as Periyar, is home to the famous Periyar Wildlife Sanctuary and Tiger Reserve.</p>
               <p>You can opt for Periyar Tiger Trail, Nature walk, Bamboo Rafting, etc in this exotic sanctuary, or an early morning boat ride in the Periyar Lake.</p>
                <p>The spice plantation in Thekkady is a prime attraction of this beautiful land. Though sprawling tea estates cover much of the landscape of Thekkady, plantations of cardamom, rubber, vanilla and coffee are also aplenty.</p>    
            </div>
            <br></br>
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
export default Mangalore; 