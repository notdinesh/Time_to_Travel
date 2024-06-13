import React from 'react';
import image1 from './video/logo2.png';
import p1 from './/video/p1.jpg';
import z1 from './/video/agra.jpg';
import z2 from './/video/DELHI-RED-FORT.jpg';
import z3 from './/video/jaipur.jpg';
import { Link } from 'react-router-dom';
// import './Agra-delhi.css';
function Agradelhijaipur(){
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
        <p style={{textAlign: "center",color:"orange",fontWeight:"700",fontSize:"35px"}}>AGRA - JAIPUR - DELHI</p>
        <div class="info" style={{fontSize:"14px"}}>
            <div class="content-1" style={{width:"100%",fontSize:"14px"}}>
               <p><img src={`${z1}`} style={{float:"left",marginRight:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img><strong>Agra</strong> - a rich history, delightful tourist attractions and a vibrant presence - that is Agra for you. Though the city has come a long way since its days as a Mughal stronghold, it still retains its old worldly feel that simply delights every visitor. Moreover, the tourist attractions in Agra are such that one simply cannot have enough of them.</p>
               <p>The very first thing that comes to the mind at the very mention of Agra is the ethereal Taj Mahal. Having inspired many singers, artists and poets till date, this exquisite creation is a heartfelt tribute to Mumtaz Mahal by her husband, Emperor Shah Jahan. Right from brochures to promotional videos, the Taj has featured in almost everything when it comes to promoting India to tourists around the world. Indeed, so overwhelming is the presence of the Taj that it is sometimes felt that the other tourist attractions in Agra pale in comparison.</p>
               
               <p>However, Agra boasts of many other delightful attractions that can make your trip an affair to remember. The Red Fort in Agra is one such monument that is sure to amaze you no end. Built in 1565 by Emperor Akbar, this fort houses many interesting structures and exquisite palaces that dazzle the eyes. The Jama Masjid that is one of the largest mosques in India is another monument to visit. Other Agra tourist attractions include the tomb of Itimad Ud Daulah, Chini ka Rauza, Rambagh Gardens, Dayalbagh Gardens and Buland Darwaza. You can also travel a little distance to visit the Akbar's tomb at Sikandara and the Fatehpur Sikri complex.</p> 
               
               <p>Shopping in Agra is something not to be missed. Indeed, Agra is a shopper's paradise where you can buy everything from marble products to delicate rugs that can brighten up your living room.</p> 
            </div>
            <br></br>
            <div>
               <p><img src={`${z2}`} style={{float:"right",marginRight:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img>Delhi is the proud capital city of India and is also a veritable mirror to the glorious history and rich heritage of the country. This is perfectly exemplified in the numerous forts, temples, museums and other major tourist attractions in Delhi that speak of the city’s intriguing past. Delhi is clearly segregated into Old and New Delhi, each of which boasts of being home to several attractions that are largely visited by tourists from the world.</p>
               <p>We at Time To Travel take you on a memorable tour to the various tourist attractions in Delhi that are sure to fascinate you with their past legends and striking beauty of their architecture. Come with us to explore these tourist attractions of Delhi and take a memorable trip down memory aisle.</p>
               <p>While Old Delhi is dotted with a large number of majestic forts, striking temples and other historic buildings that are ideally reminiscent of the history of India, New Delhi presents a relatively modern picture with Government houses, embassies and other official buildings that are home to several top-level dignitaries. Some of the major attractions of Old Delhi include Purana Quila or Old Fort, Jantar Mantar observatory, Chandni Chowk, Red Fort or Lal Quila and Jama Masjid.</p>
               <p>There are equally interesting places to see in New Delhi that form an integral part of Delhi tour packages. Parliament House, Rashtrapati Bhawan, Birla Mandir, Akshardham Temple, Appu Ghar and Bahai Temple are just a few of the major attractions that are a must visit during your travel to New Delhi.</p>

            </div>
            <br></br>
            <div>
                <p><img src={`${z3}`} style={{float:"left",marginRight:"10px",height:"300px",width:"500px",boxSizing:"border-box"}}></img>Jaipur - The land of majestic desert, Rajasthan, is one of the most beautiful and most frequented tourist destinations of India. Jaipur, also known as the pink city, is the capital of Rajasthan and is a favorite destination of people from India and foreign tourists. The name Jaipur spells a riot of colors, the wonderful people, the forts and palaces, the fairs and festivals, the wonderful camel rides and so on.</p>
                <p>Jaipur is about 258 km from Delhi, the capital of India and can be reached easily through air, train and roadway. The city of Jaipur is enclosed with seven gates. The major among them are Chandpol, Sanganeri, and Ajmeri. The 'pink city' label of Jaipur applies specifically to the old walled quarter of the capital, which is painted pink all over.</p>
                <p>The city is named upon its founder Maharaja Jai Singh II, who built the city with great planning. There are a lot of tourist attractions in and around Jaipur that are worth watching. Some of these places include Amer Palace, City Palace, Hawa Mahal, Jai Garh, Jantar Mantar, Nahargrh Fort, Sisodia Rani ka Bagh, Governtment Central Museum, Chawki Dhani, Albert Hall and lots more.</p>
                <p>Jaipur also serves as a great shopping destination. Handicrafts of Jaipur are famous throughout India and abroad. Other popular works of Jaipur include brass work, enamel or Minakari done on gold and silver, textiles, Sanganeri and Bagru block prints, Bandhej (tie and dye) print and lots more. You would love to pick the beautiful crafts of Jaipur as souvenir.</p>
                <div class="button">
                <Link to='/contact'><button>Get a Callback</button></Link>
            </div>
            </div>
        </div>
        </>
    )
}
export default Agradelhijaipur; 