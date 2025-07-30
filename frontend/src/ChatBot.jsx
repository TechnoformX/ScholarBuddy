import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import "./a.css"
import logo from './images/logo.jpg'
import profile from './images/profile.png'
import cover from './images/cover.png'

const ChatBot = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate(); // ✅ For navigation

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
        console.log(resultData); // ✅ Debug
        // ✅ Navigate to /results and pass scholarship data
        navigate('/results', { state: { scholarships: Object.values(resultData) } });

      })
      .catch(err => {
        console.error("Error fetching scholarships:", err);
      });

    setInput(""); // clear input field
  };

  return (
    <div>
      <div className='navbar'>
        <img src={logo} alt="idk" className='w-[70px] h-[70px] rounded-full hover:cursor-pointer'/>
        <div className='flex space-x-25 mt-[20px]'>
          <h1 className='text-white text-2xl font-bold'>Home</h1>
          <h1 className='text-white text-2xl font-bold'>Scholarships</h1>
          <h1 className='text-white text-2xl font-bold'>Contact</h1>
          <img src={profile} alt="Profile icon" className='w-[40px] h-[40px] mr-[40px]'/>
        </div>
      </div>

      <div className='will-change-auto min-h-screen bg-[#0f1924]'>
        <div className='main-img'>
          <img src={cover} alt="Main Image" className='shadow-lg'/>
        </div>
        <div className='heading text-center text-white mt-4'>
          <h1 className='text-4xl font-bold'>Welcome to ScholarBuddy</h1>
          <h2 className='text-lg font-light'>I'm here to help you find the perfect scholarship</h2>
        </div>

        {/* Input Box */}
        <div className='input-box flex flex-row items-center justify-center mt-10'>
          <img src={profile} alt="Profile" className='w-[40px] h-[40px] mr-[12px]'/>
          <input
            type="text"
            placeholder='Ask me anything...'
            className='w-[600px] h-[50px] rounded-lg p-2 font-semibold text-white bg-[#223649]'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSend}
            className='font-bold text-2xl text-white w-[100px] h-[50px] rounded-lg ml-2 border-white border-[1px] bg-blue-400'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBot;
