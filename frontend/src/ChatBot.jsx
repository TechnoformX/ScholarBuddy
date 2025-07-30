import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import "./a.css" // Make sure your CSS file is correctly imported
import logo from './images/logo.jpg'
import profile from './images/profile.png'
import cover from './images/cover.png'; // <--- Your original bookshelf image

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
        // Optionally display an error message to the user
      });

    setInput("");
  };

  return (
    <div>
      {/* Navbar with deep dark background and subtle shadow */}
      <div className='navbar flex justify-between items-center py-4 px-8 shadow-lg'>
        <img src={logo} alt="ScholarBuddy Logo" className='w-[60px] h-[60px] rounded-full cursor-pointer transition-transform duration-300 hover:scale-110'/>
        <div className='flex space-x-8'>
          {/* Navigation links with body font and warm hover effect */}
          <h1 className='text-[var(--color-text-light)] text-xl font-body font-semibold hover:text-[var(--color-accent-gold)] cursor-pointer transition-colors duration-300'>Home</h1>
          <h1 className='text-[var(--color-text-light)] text-xl font-body font-semibold hover:text-[var(--color-accent-gold)] cursor-pointer transition-colors duration-300'>Scholarships</h1>
          <h1 className='text-[var(--color-text-light)] text-xl font-body font-semibold hover:text-[var(--color-accent-gold)] cursor-pointer transition-colors duration-300'>Contact</h1>
          <img src={profile} alt="Profile icon" className='w-[35px] h-[35px] ml-4 cursor-pointer'/>
        </div>
      </div>

      {/* Main content area with a deep dark gradient background complementing the image */}
      <div className='min-h-screen bg-gradient-to-br from-[var(--color-dark-bg-1)] to-[var(--color-dark-bg-2)] py-10'>
        {/* Main image container with fade and expand effect */}
        <div className='main-img text-center mb-10 animate-fade-expand-image'>
          <img
            src={cover} // Using your original 'cover.png' image
            alt="A bookshelf filled with various books, representing knowledge and learning."
            className='w-full max-w-5xl mx-auto rounded-lg shadow-2xl object-cover h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]'
          />
        </div>
        <div className='heading text-center mt-4 animate-fade-in'>
          {/* Main heading with new academic font and subtle shadow */}
          <h1 className='text-5xl sm:text-6xl font-heading font-extrabold mb-2 text-[var(--color-text-light)] drop-shadow-md'>Welcome to ScholarBuddy</h1>
          {/* Subheading with muted text color, hinting at knowledge */}
          <h2 className='text-xl sm:text-2xl font-body font-light text-[var(--color-text-muted)]'>Your guide to a world of knowledge and opportunity.</h2>
        </div>

        {/* Input Box - Modern and Academic-themed */}
        <div className='input-box flex flex-col items-center justify-center mt-16 sm:flex-row'>
          <img src={profile} alt="Profile" className='w-[50px] h-[50px] mr-0 sm:mr-4 mb-4 sm:mb-0'/>
          <input
            type="text"
            placeholder='Ask me about scholarships, fields of study, or locations...'
            className='w-11/12 md:w-[650px] h-[60px] rounded-xl p-4 pl-6 font-body font-medium text-[var(--color-text-light)] bg-[var(--color-medium-bg)]
                       border border-[var(--color-accent-gold)] focus:outline-none focus:ring-3 focus:ring-[var(--color-accent-gold)]
                       placeholder-[var(--color-text-muted)] transition-all duration-300 shadow-xl' // Rounded-xl, warm border/focus
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSend}
            className='font-heading font-bold text-xl text-[var(--color-text-light)] w-[140px] h-[60px] rounded-xl ml-0 sm:ml-4 mt-4 sm:mt-0
                       bg-[var(--color-accent-orange)] hover:bg-opacity-90 transition-all duration-300 shadow-xl
                       flex items-center justify-center space-x-2' // Rounded-xl, deep orange button
          >
            <span>Send</span>
          </button>
        </div>
        {/* Optional: You can uncomment this section if you want a subtle pulsating text below the input */}
        {/* <div className='text-center mt-8'>
          <p className='text-[var(--color-accent-gold)] text-lg animate-pulse-glow'>Discover your next chapter.</p>
        </div> */}
      </div>
    </div>
  )
}

export default ChatBot;
