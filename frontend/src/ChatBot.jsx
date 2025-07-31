import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import "./a.css"
import logo from './images/logo.jpg'
import profile from './images/profile.png'
import cover from './images/cover.png'

const ChatBot = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    const userProfile = {
      gender: "Male",
      religion: "Muslim",
      income: "Upto 1.5L",
      education_qualification: "Undergraduate",
      "annual-percentage": "90-100",
      country: "India"
    };

    axios.post("http://127.0.0.1:5000/filter_scholarships", userProfile)
      .then(res => {
        const resultData = res.data;
        console.log(resultData);
        navigate('/results', { state: { scholarships: Object.values(resultData) } });
      })
      .catch(err => {
        console.error("Error fetching scholarships:", err);
      });

    setInput("");
  };

  return (
    <div>
      {/* Navbar */}
      <div className='navbar flex justify-between items-center py-4 px-8 shadow-lg'>
        <img src={logo} alt="ScholarBuddy Logo" className='w-[80px] h-[80px] rounded-full cursor-pointer transition-all duration-500 hover:scale-125 hover:rotate-12 shadow-2xl border-4 border-[var(--color-accent-gold)] hover:border-[var(--color-accent-orange)] animate-pulse-glow' />
        <div className='flex space-x-8'>
          <h1 className='text-[var(--color-text-light)] text-xl font-body font-semibold hover:text-[var(--color-accent-gold)] cursor-pointer transition-colors duration-300'>Home</h1>
          <h1 className='text-[var(--color-text-light)] text-xl font-body font-semibold hover:text-[var(--color-accent-gold)] cursor-pointer transition-colors duration-300'>Scholarships</h1>
          <h1 className='text-[var(--color-text-light)] text-xl font-body font-semibold hover:text-[var(--color-accent-gold)] cursor-pointer transition-colors duration-300'>Contact</h1>
          <img src={profile} alt="Profile icon" className='w-[35px] h-[35px] ml-4 cursor-pointer' />
        </div>
      </div>

      {/* Main Section */}
      <div className='min-h-screen bg-gradient-to-br from-[var(--color-dark-bg-1)] to-[var(--color-dark-bg-2)] py-10'>
        {/* Central Image */}
        <div className='main-img text-center mb-10 animate-fade-expand-image relative'>
          <div className='central-logo-container relative inline-block'>
            <img
              src={cover}
              alt="A bookshelf filled with various books, representing knowledge and learning."
              className='w-[95vw] max-w-[1600px] mx-auto h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]
                         rounded-[50px] shadow-[0_0_60px_rgba(255,215,0,0.2)] object-cover border-[10px]
                         border-gradient-to-br from-[var(--color-dark-bg-1)] via-transparent to-[var(--color-dark-bg-2)]
                         brightness-[1.15] contrast-[1.2] saturate-[1.2]'
            />
            <div className='floating-sparkles absolute inset-0 pointer-events-none'>
              <div className='sparkle sparkle-1'></div>
              <div className='sparkle sparkle-2'></div>
              <div className='sparkle sparkle-3'></div>
              <div className='sparkle sparkle-4'></div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className='heading text-center mt-8 animate-fade-in flex flex-col items-center justify-center'>
          <div className='welcome-message-container text-center max-w-4xl mx-auto px-4'>
            <h1 className='text-6xl sm:text-7xl lg:text-8xl font-heading font-extrabold mb-6 text-transparent bg-gradient-to-r from-[var(--color-accent-gold)] via-[var(--color-text-light)] to-[var(--color-accent-orange)] bg-clip-text drop-shadow-2xl animate-text-shimmer leading-tight'>Welcome to ScholarBuddy</h1>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-body font-light text-[var(--color-text-muted)] mb-4 leading-relaxed'>Your guide to a world of knowledge and opportunity.</h2>
            <p className='text-lg sm:text-xl font-body text-[var(--color-accent-gold)] italic animate-pulse-glow mt-4'>"Unlock your potential, one scholarship at a time."</p>
          </div>
        </div>

        {/* Input Section */}
        <div className='input-box flex flex-col items-center justify-center mt-20 sm:flex-row relative'>
          <div className='profile-container relative'>
            <img src={profile} alt="Profile" className='w-[60px] h-[60px] mr-0 sm:mr-6 mb-4 sm:mb-0 rounded-full border-3 border-[var(--color-accent-gold)] shadow-lg hover:shadow-[0_0_20px_var(--color-accent-gold)] transition-all duration-500 hover:scale-110 cursor-pointer' />
            <div className='absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping'></div>
          </div>
          <div className='input-container relative'>
            <input
              type="text"
              placeholder='✨ Ask me about scholarships, fields of study, or locations...'
              className='w-11/12 md:w-[700px] h-[70px] rounded-2xl p-4 pl-8 pr-4 font-body font-medium text-[var(--color-text-light)] bg-gradient-to-r from-[var(--color-medium-bg)] to-[var(--color-dark-bg-2)]
                         border-2 border-[var(--color-accent-gold)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent-gold)] focus:border-[var(--color-accent-orange)]
                         placeholder-[var(--color-text-muted)] transition-all duration-500 shadow-2xl hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] backdrop-blur-sm'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className='input-particles absolute inset-0 pointer-events-none'>
              <div className='particle particle-1'></div>
              <div className='particle particle-2'></div>
              <div className='particle particle-3'></div>
            </div>
          </div>
          <button
            onClick={handleSend}
            className='font-heading font-bold text-xl text-[var(--color-text-light)] w-[160px] h-[70px] rounded-2xl ml-0 sm:ml-6 mt-4 sm:mt-0
                       bg-gradient-to-r from-[var(--color-accent-orange)] to-[var(--color-accent-gold)] hover:from-[var(--color-accent-gold)] hover:to-[var(--color-accent-orange)]
                       transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(255,140,0,0.6)] transform hover:scale-105 hover:-translate-y-1
                       flex items-center justify-center space-x-2 relative overflow-hidden group'
          >
            <span className='relative z-10 transition-transform duration-300 group-hover:scale-110'>🚀 Send</span>
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700'></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBot;
