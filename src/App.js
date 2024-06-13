// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './home';
import Tour from './tour';
import Sign from './signup';
import Service from './service';
import Contact from './contact';
import Bhakthi from './bhakthi';
import Gallery from './gallery';
import Servicein from './servicein';
import Login from './login';
import Forgot from './forget';
import Agradelhi from './Agra-delhi';
import Agradelhijaipur from './Agra-Jaipur-Delhi';
import Agradelhikashmir from './Agra-delhi-kashmir';
import Cochinmunnar from './cochin-munnar';
import Cochinmunnarthekkady from './cochin-munnar-thekkady';
import Keralabackwaters from './kerala-backwaters';
import Singapore from './singapore';
import Malaysia from './malaysia';
import Hongkong from './hongkong';
import Ahamedabad from './ahamedabad';
import Goa from './goa';
import Mumbai from './mumbai';
import Bangaloregoa from './bangaloregoa';
import Hyderabadajanta from './hyderabadajanta';
import Kolkata from './kolkata';
import Srilanka from './srilanka';
import Maldives from './maldives';
import Dubai from './dubai';
import Alahabad from './alahabad';
import Mangalore from './mangalore';
import Bangaloremysore from './bangaloremysore';
import Vishakhapatnam from './vishakhapatnam';
import Trivandrum from './Trivandrum';
import Kodaikanal from './kodaikanal';
import Ooty from './ooty';
import Kasi from './kasi';
import Rishikesh from './rishikesh';
import Badrinath from './badrinath';
import Kedarnath from './kedarnath';
import Rameshwaram from './rameshwaram';
import { Route, Routes } from 'react-router-dom';


export default function App(){
  return (
    <>
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/home' element={<Home />} />
       <Route path='/sign' element={<Sign />} />
       <Route path='/tour' element={<Tour />} />
       <Route path='/service' element={<Service />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/bhakthi' element={<Bhakthi />} />
       <Route path='/gallery' element={<Gallery />} />
       <Route path='/servicein' element={<Servicein />} />
       <Route path='/login' element={<Login />} />
       <Route path='/forgot' element={<Forgot />} />
       <Route path='/agradelhi' element={<Agradelhi />} />
       <Route path='/agradelhijaipur' element={<Agradelhijaipur />} />
       <Route path='/agradelhikashmir' element={<Agradelhikashmir />} />
       <Route path='/cochinmunnar' element={<Cochinmunnar />} />
       <Route path='/cochinmunnarthekkady' element={<Cochinmunnarthekkady />} />
       <Route path='/keralabackwaters' element={<Keralabackwaters />} />
       <Route path='/singapore' element={<Singapore />} />
       <Route path='/malaysia' element={<Malaysia />} />
       <Route path='/hongkong' element={<Hongkong />} />
       <Route path='/ahamedabad' element={<Ahamedabad />} />
       <Route path='/goa' element={<Goa />} />
       <Route path='/mumbai' element={<Mumbai />} />
       <Route path='/bangaloregoa' element={<Bangaloregoa />} />
       <Route path='/hyderabadajanta' element={<Hyderabadajanta />} />
       <Route path='/kolkata' element={<Kolkata />} />
       <Route path='/srilanka' element={<Srilanka />} />
       <Route path='/maldives' element={<Maldives />} />
       <Route path='/dubai' element={<Dubai />} />
       <Route path='/alahabad' element={<Alahabad />} />
       <Route path='/bangaloremysore' element={<Bangaloremysore />} />
       <Route path='/mangalore' element={<Mangalore />} />
       <Route path='/vishakhapatnam' element={<Vishakhapatnam />} />
       <Route path='/trivandrum' element={<Trivandrum />} />
       <Route path='/kodaikanal' element={<Kodaikanal />} />
       <Route path='/ooty' element={<Ooty />} />
       <Route path='/kasi' element={<Kasi />} />
       <Route path='/Rishikesh' element={<Rishikesh />} />
       <Route path='/badrinath' element={<Badrinath />} />
       <Route path='/kedarnath' element={<Kedarnath />} />
       <Route path='/rameshwaram' element={<Rameshwaram />} />

    </Routes>
    </>
  )
}


