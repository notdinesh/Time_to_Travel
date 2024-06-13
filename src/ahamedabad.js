import React from 'react';
import image1 from './video/logo2.png';
import p1 from './/video/p1.jpg';
import z1 from './/video/ahamedabad.jpg';
import z2 from './/video/MUNNAR.jpg';
import z3 from './/video/udaipur.jpg';
import { Link } from 'react-router-dom';
// import './Agra-delhi.css';
function Ahamedabad(){
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
        <p style={{textAlign: "center",color:"orange",fontWeight:"700",fontSize:"35px"}}>AHMEDABAD - MUNNAR - UDAIPUR</p>
        <div class="info" style={{fontSize:"14px"}}>
            <div class="content-1" style={{width:"100%"}}>
               <p><img src={`${z1}`} style={{float:"left",marginRight:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img><strong>Ahamedabad</strong> was named after Gujarat's ruler, Ahmed Shah. Being the textile city of India, Ahmedabad is often called the "Manchester of the East". This place is also famous for its rich association with the Indian Freedom Movement and the Father of the Nation, Mahatma Gandhi.</p>
               <p>Ahmedabad has got several tourist attractions that range from monuments to beautiful amusement parks. Many buildings of the city are built following Indo-Sarcenic approach of architecture, which is a combination of Islamic and Hindu styles. Rani Rupmati's Mosque, the Jama Masjid and Rani Sipri's Mosque - all feature highly on the list of Tourist Attractions of Ahmedabad and showcase Indo-Sarcenic method of architecture. Sidi Sayad's Mosque is another splendid example of delicate carving done on stone windows. Sidi Bashir's Mosque and The tomb of Ahmed Shah also draw huge footfalls round the year.</p>    
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
               <p><img src={`${z2}`} style={{float:"right",marginLeft:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img>Mount Abu - The divine blessings of the Trinity made Mount Abu a consecrated place. Sage Vashishtha performed yajna and the divine powers were so pleased with him that they endowed this land with a certain amount of divinity.</p>
                <p>Along the quite drives, through the unending sea of tea plantations, signs of human life itself is a rare sight apart from similarly attired plantation workers. The unending dominance of the tea plantations and the mountain flower Neelakkurinji that bloom once in 12 years are both Thekkady - a group of elephentssynonymous landmarks.</p>    
               <p>Playing mists, soul searching winds, hurling waterfalls, cold monsoons, picturesque towns, fragrant cardamom bushes, sprawling tea plantations, shaven silver oaks, indomitable elephant herd, long winding lanes, the bluish tint of the Neelakkurinji mountains, floating tunes of early morning radio, strangely uniform herds of plantation workers.</p>   
               <p>The Temples in Mount Abu are places of pilgrimage not only for the Jain pilgrims but also for the other pilgrims as well. The Dilwara Temple is a great site for the Jain pilgrimage whereas the Gaumukh Temple is of Hindu interest. Some of the temples in Mount Abu are The Jain Temple, Mount Abu, Adhar Devi Temple, Mount Abu, Gaumukh Temple, Mount Abu, Dilwara Temple, Mount Abu, Vimala Vashi Temple, Mount Abu, Luna Vashi Temple, Mount Abu and Shri Raghunathji Temple, Mount Abu.</p>
            </div>
            <br></br>
            <div>
               <p><img src={`${z3}`} style={{float:"left",marginRight:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img><strong>Udaipur -</strong> is an immensely popular tourist destination of India. This beautiful holiday destination is also considered as ‘City of Palaces’, or a ‘Fairyland. Tourists often frequent Udaipur. It features some great tourist attractions. This beautiful city is surrounded all over by the huge mountains, hills and splendid palaces. In the year 1568, Maharana Udai Singh built this beautiful city. Major highlights during Udaipur tourism are forts, palaces, temples, museums etc. Major tourist attractions in Udaipur are Lake Palace, City Palace, Jagdish Temple, Saheliyon ki Bari etc.</p>
                <p>Experience the mind-blowing beauty of Lake Palace by opting for Udaipur tour packages. This beautiful palace is positioned in the mid of Pichola Lake. Maharaja Jagat Singh built this beautiful royal summer palace in the year 1743. Later it became a five star palace hotel.</p> 
               <p>Experience the mind-blowing beauty of Lake Palace by opting for Udaipur tour packages. This beautiful palace is positioned in the mid of Pichola Lake. Maharaja Jagat Singh built this beautiful royal summer palace in the year 1743. Later it became a five star palace hotel.</p>
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
export default Ahamedabad; 