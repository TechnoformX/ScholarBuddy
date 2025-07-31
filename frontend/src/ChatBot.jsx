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
          <h1 className='text-[var(--color-text-light)] text-xl font-body font-semibold hover:text-[var(--color-accent-gold)] cursor-pointer transition-colors duration-300'>Scholarships<
