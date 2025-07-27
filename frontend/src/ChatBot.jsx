import React from 'react'
import "./a.css"
import logo from './images/logo.jpg'
import not from './images/not.png'
import profile from './images/profile.png'
import cover from './images/cover.png'

const ChatBot = () => {
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

        
        <div className='will-change-auto h-[1000px] bg-[#0f1924]'>
            <div className='main-img'>
                <img src={cover} alt="Main Image" className='shadow-lg'/>
            </div>
            <div className='heading'>
                <h1 className='text-4xl'>Welcome to ScholarBuddy</h1>
                <h2>I'm here to help you find the perfect Scholarhip</h2>
            </div>
            <div className='chat' >

            </div>
            <div className='input-box flex flex-row items-center justify-center '>
                <img src={profile} alt="Profile" className='w-[40px] h-[40px] mr-[12px]'/>
                <input type="text" placeholder='Ask me anything...' className='w-[600px] h-[50px] rounded-lg p-2 font-semibold text-white bg-[#223649]'/>
                <button className='font-bold text-2xl  text-white w-[100px] h-[50px] rounded-lg ml-2 border-white border-[1px] bg-blue-400'>Send</button>
            </div>
        </div>
           
    </div>
  )
}

export default ChatBot