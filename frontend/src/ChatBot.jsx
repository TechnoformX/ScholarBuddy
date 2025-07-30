import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import "./a.css" // Ensure this CSS file is used for any custom animations/fonts
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
        // Optionally display an error message to the user
      });

    setInput("");
  };

  return (
    <div>
      {/* Navbar with subtle shadow and refined spacing */}
      <div className='navbar flex justify-between items-center py-4 px-8 bg-[#0f1924] shadow-lg'>
        <img src={logo} alt="ScholarBuddy Logo" className='w-[60px] h-[60px] rounded-full cursor-pointer transition-transform duration-300 hover:scale-110'/>
        <div className='flex space-x-8 mt-[0px]'> {/* Adjusted spacing and removed unnecessary margin-top */}
          <h1 className='text-white text-xl font-semibold hover:text-blue-300 cursor-pointer transition-colors duration-300'>Home</h1>
          <h1 className='text-white text-xl font-semibold hover:text-blue-300 cursor-pointer transition-colors duration-300'>Scholarships</h1>
          <h1 className='text-white text-xl font-semibold hover:text-blue-300 cursor-pointer transition-colors duration-300'>Contact</h1>
          <img src={profile} alt="Profile icon" className='w-[35px] h-[35px] ml-4 cursor-pointer'/> {/* Adjusted size and margin */}
        </div>
      </div>

      {/* Main content area with a subtle background */}
      <div className='min-h-screen bg-gradient-to-br from-[#0f1924] to-[#1a2b3d] py-10'> {/* Added gradient */}
        <div className='main-img text-center mb-8'> {/* Centered image container with margin-bottom */}
          <img src={cover} alt="Main Image" className='w-full max-w-4xl mx-auto rounded-lg shadow-xl'/> {/* Max width, auto margins for centering */}
        </div>
        <div className='heading text-center text-white mt-4 animate-fade-in'> {/* Added a simple fade-in class (needs CSS) */}
          <h1 className='text-5xl font-extrabold mb-2'>Welcome to ScholarBuddy</h1> {/* Larger, bolder heading */}
          <h2 className='text-xl font-light text-gray-300'>I'm here to help you find the perfect scholarship for you.</h2> {/* Slightly refined text */}
        </div>

        {/* Input Box */}
        <div className='input-box flex flex-row items-center justify-center mt-12'> {/* Increased margin-top */}
          <img src={profile} alt="Profile" className='w-[45px] h-[45px] mr-4'/> {/* Slightly larger icon, more margin */}
          <input
            type="text"
            placeholder='Ask me anything, e.g., "scholarships for engineering students in India"...'
            className='w-3/5 md:w-[600px] h-[55px] rounded-full p-4 font-medium text-white bg-[#223649] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400' // Rounded, padding, focus state, placeholder color
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSend}
            className='font-bold text-xl text-white w-[120px] h-[55px] rounded-full ml-4 bg-blue-500 hover:bg-blue-600 transition-colors duration-300 shadow-md' // Full rounded, stronger blue, hover, shadow
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBot;
