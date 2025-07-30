import React from 'react'

const Card = ({ name, des, logo, link1 }) => {
  return (
    <div className='w-[420px] h-[440px] bg-[#1c3c50] ml-[40px] mt-[39px] rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] p-5 flex flex-col items-center justify-between'>

      {/* Scholarship Title */}
      <h1 className='text-white font-semibold font-mono text-2xl text-center px-2'>
        {name}
      </h1>

      {/* Logo Centered */}
      <div className='mt-3'>
        <img src={logo} alt="Scholarship Logo" className="w-16 h-16 object-contain rounded-xl" />
      </div>

      {/* Description */}
      <p className='text-white font-light text-center mt-4 px-3 text-sm leading-relaxed'>
        {des}
      </p>

      {/* Apply Button */}
      <a
        href={link1}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-[300px] h-[55px] mt-6 bg-gradient-to-r from-[#043333] to-[#2d5555] font-bold text-white text-xl rounded-[20px] shadow-md font-mono flex items-center justify-center hover:shadow-lg hover:cursor-pointer"
      >
        Enroll Now
      </a>

    </div>
  )
}

export default Card
