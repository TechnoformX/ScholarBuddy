import { Profiler, useState } from 'react'
import { useNavigate } from 'react-router-dom'; 

import React from 'react'
import './index.css'
import Card from './Card.jsx'
import aLogo from './images/a.png';
import bLogo from './images/b.jpeg';
import cLogo from './images/c.png';
import dLogo from './images/d.png';
import ChatBot from './ChatBot.jsx'
import logo from './images/logo.png';




const App = () => {

  const navigate = useNavigate();
  const handleChatbot = () => {
    navigate('/chatbot'); 
  }

  return (
    <div className='bg-[#2b333b] min-h-screen'>
     <header className="bg-[#364049]/80 shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50
">
       {/* Logo + Title */}
         <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-[50px] rounded-lg" />
         <h1 className="text-white text-2xl font-semibold font-serif">ScholarBuddy</h1>
     </div>

       {/* Navigation Links */}
      <nav className="flex space-x-10 text-white text-lg font-medium font-sans">
    <a className="hover:text-yellow-400 transition-all cursor-pointer">Home</a>
    <a className="hover:text-yellow-400 transition-all cursor-pointer">All Scholarships</a>
    <a className="hover:text-yellow-400 transition-all cursor-pointer">Account</a>
      </nav>
     </header>

      
      <div className='w-[840px] h-[320px] flex flex-col justify-center  bg-[#364049]  rounded-2xl shadow-2xl mx-auto mt-[100px] text-center items-center font-serif ' >
          <h2 className='font-bold  text-4xl  bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent shadow-2xl '>Welcome to ScholarBuddy</h2>
          <button className='w-[350px] h-[70px] bg-gradient-to-r from-[#043333] to-[#2d5555] mt-[50px] rounded-2xl
                            text-white font-bold text-3xl hover:shadow-lg hover:cursor-pointer'
                            
                  onClick={handleChatbot}>
                              Find Scholarship
          </button>
      </div>

      <h2 className='text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent text-center mt-[50px] mb-[10px] tracking-wider font-serif transition-all duration-500 ease-in-out hover:scale-105
'>
  Popular Scholarships
</h2>



      <div className="flex flex-wrap justify-center gap-8 px-6 py-10">

  <Card
    name={"Fulbright-Nehru Doctoral Research Fellowship 2026-2027"}
    logo={aLogo}
    link1={"https://www.usief.org.in/fulbright-fellowships/fellowships-for-indian-citizen/fulbright-nehru-doctoral-research-fellowships/"}
    des={"The Fulbright-Nehru Doctoral Research Fellowships are designed to build long-term capacity to address global challenges and develop innovative solutions in key priority areas in both India and the U.S"}
  />
  <Card
    name={"FDU International Scholarship 2025"}
    logo={bLogo}
    link1={"https://www.wemakescholars.com/scholarship/international-undergraduate-freshmen-scholarships#:~:text=FDU%20International%20Scholarship%20at%20Fairleigh%20Dickinson%20University%202025%20is%20offered,application%20is%2001%20Dec%2C%202025."}
    des={"FDU International Scholarship. Up to $24,000 per year. Minimum Requirements: · Global Housing Grant. $3,000. Minimum Requirements: · FDU Family Grant. $1,500."}
  />
  <Card
    name={"Education Future International Scholarship 2025"}
    logo={cLogo}
    link1={"https://www.education-future.org/"}
    des={"Education Future International Scholarship 2025 is an opportunity offered by the Education Future organisation. It is offered to meritorious Indian students who are studying overseas at any of the top universities globally"}
    
  />
  <Card
    name={"Entrepreneurship Award at Bayes Business School 2025"}
    logo={dLogo}
    link1={"https://www.falmouth.ac.uk/study/postgraduate/entrepreneurship?utm_term=entrepreneurship%20masters&utm_campaign=PG-Entrepreneurship-MSc&utm_source=adwords&utm_medium=ppc&hsa_acc=9199248146&hsa_cam=22379645220&hsa_grp=180223800187&hsa_ad=742480323779&hsa_src=g&hsa_tgt=kwd-250318799&hsa_kw=entrepreneurship%20masters&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=22379645220&gbraid=0AAAAAoZfqtvp3o6yWq_sMgXKiVXgCFgdI&gclid=Cj0KCQjw4qHEBhCDARIsALYKFNMFeGXF497yzJMhCEtqWtUpTswzQfWSJ14GaRQ3-r8HWHktC8W4klMaAsO9EALw_wcB"}
    des={"This Entrepreneurship & Innovation Management MSc focuses on helping you to become a resilient entrepreneur in practice, not just in theory. Through participating in highly interactive sessions, you’ll learn what it takes to bring new products to market"}
  />
</div>

<footer className="bg-[#364049] py-8 mt-16 shadow-inner">
  <div className="max-w-7xl mx-auto text-center text-white space-y-4">
    <h1 className="text-2xl font-bold font-serif tracking-wider">
      Made by <span className="text-yellow-400">Hackathon Group</span>
    </h1>
    <p className="text-sm text-gray-300 font-mono">
      © {new Date().getFullYear()} ScholarBuddy. TechnoformX . All rights reserved.
    </p>
    <div className="flex justify-center space-x-6 text-white text-xl">
      <a href="#" className="hover:text-yellow-400 transition-all">Facebook</a>
      <a href="#" className="hover:text-yellow-400 transition-all">LinkedIn</a>
      <a href="#" className="hover:text-yellow-400 transition-all">Contact</a>
    </div>
  </div>
</footer>


    <div>

    </div>

    </div>
  )
}

export default App