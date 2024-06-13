import React from 'react';
import image1 from './video/logo2.png';
import p1 from './/video/p1.jpg';
import z1 from './/video/COCHIN.jpg';
import z2 from './/video/MUNNAR.jpg';
import z3 from './/video/THEKADI-1.jpg';
import { Link } from 'react-router-dom';
// import './Agra-delhi.css';
function Hongkong(){
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
        <p style={{textAlign: "center",color:"orange",fontWeight:"700",fontSize:"35px"}}>Hongkong - MACCAU - THAILAND</p>
        <div class="info" style={{fontSize:"14px"}}>
            <div class="content-1" style={{width:"100%"}}>
               <p><img src={`${z1}`} style={{float:"left",marginRight:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img><strong>Hong Kong(HK)</strong> Special Administrative Region (S.A.R.) of China remains the most traveled place in the entire Asia, despite its small size. It is packed with a lot of must-see attractions. The unique natural beauty of this harbour city forms the perfect backdrop to the man made wonders of Disneyland, Ocean Park and Victoria Peak.</p>
               <p>Journey to the land of Hong Kong satisfies your quest for expedition where one has enough sights to explore. From the cove to the coastline, from the dazzling nightlife to the gleaming daylight, from the ferry ride to the fashion statement, from the Buddhist monasteries to the Man Mo Temple, Hong Kong is known to attract you with all kinds of appeal. If Hong Kong Tourist Attractions is what you are looking out for then you are hardly going to get disappointed. As the place has in store enough attractions, sightseeing and tourist destinations.</p>            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
               <p><img src={`${z2}`} style={{float:"right",marginRight:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img>Macau’s unique attractions, world heritage, and fascinating museums add an irreplaceable dimension to a vibrant coastal city renowned as one of the finest holiday getaways in the region. The inscription of Macau’s historic center on UNESCO’s World Heritage List in 2005 Internationally affirmed the importance of nearly five centuries of cultural and architectural exchange between Portugal and China.</p>
               <p>Locations like Plaza Senado, the Ruins of St. Paul’s, and the picturesque villages of Taipa and Coloane remind visitors that the port of Macau has long been a triumph of human cooperation and unity. From the ancient temples, fortresses, and churches to peaceful beaches and hilltop hikes to modern-day monuments like the Macau Tower, there are many attractions to see in Macau.</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
               <p><img src={`${z3}`} style={{float:"left",marginRight:"10px",height:"250px",width:"500px",boxSizing:"border-box"}}></img><strong>Thailand</strong> an area of 513,000 square kilometers, lies in the heart of Southeast Asia, roughly equidistant between India and China. It shares borders with Myanmar to the west and north, Laos to the northeast, Combodia to the east and Malaysia to the south.</p>
               <p>Topographically the country is divided into four distinct areas: the mountainous North, the fertile Central Plains, the semi-arid plateau of the Northeast, and the peninsula South distinguished by its many beautiful tropical beaches and islands.</p>
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
export default Hongkong; 